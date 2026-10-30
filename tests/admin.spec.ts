import { test, expect, type Page } from "@playwright/test";

const adminId = "ee76fecc-6cd2-4568-b73f-24276961ae14";
const question = { id: 1, source_no: "001", text: "Întrebare de verificare", answers: [{ key: "a", text: "Varianta A" }, { key: "b", text: "Varianta B" }], correct: "a", images: [], revision: 1 };

async function login(page: Page, id = adminId) {
  const user = { id, aud: "authenticated", role: "authenticated", email: "admin@example.test", app_metadata: { provider: "email" }, user_metadata: {}, created_at: new Date().toISOString() };
  const jwt = [Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url"), Buffer.from(JSON.stringify({ sub: id, exp: Math.floor(Date.now() / 1000) + 3600, role: "authenticated" })).toString("base64url"), "test-signature"].join(".");
  await page.route("**/auth/v1/token**", route => route.fulfill({ json: { access_token: jwt, refresh_token: "test-refresh", token_type: "bearer", expires_in: 3600, user } }));
  await page.route("**/auth/v1/user", route => route.fulfill({ json: user }));
  await page.goto("/atestate/admin");
  await expect(page.getByRole("heading", { name: "Autentificare administrator" })).toBeVisible();
  await page.getByLabel("E-mail", { exact: true }).fill("admin@example.test");
  await page.getByLabel("Parolă", { exact: true }).fill("test-only-password");
  await page.getByRole("button", { name: "Intră în administrare" }).click();
}

test("admin edits question, answers and correct choice; saves exact scoped update", async ({ page }) => {
  let updated = false;
  await page.route("**/rest/v1/question_bank**", async route => {
    if (route.request().method() === "PATCH") {
      const url = new URL(route.request().url());
      expect(url.searchParams.get("category")).toBe("eq.ca-marfa");
      expect(url.searchParams.get("language")).toBe("eq.ro");
      expect(url.searchParams.get("id")).toBe("eq.1");
      expect(url.searchParams.get("revision")).toBe("eq.1");
      const data = route.request().postDataJSON();
      expect(data.text).toBe("Întrebare modificată");
      expect(data.answers[1].text).toBe("Răspuns modificat");
      expect(data.correct).toBe("b");
      updated = true;
      await route.fulfill({ json: { ...question, ...data, revision: 2 } });
    } else await route.fulfill({ json: [question], headers: { "content-range": "0-0/1", "access-control-expose-headers": "content-range" } });
  });
  await login(page);
  await expect(page.getByLabel("Textul întrebării")).toHaveValue(question.text);
  await page.getByLabel("Textul întrebării").fill("Întrebare modificată");
  await page.getByLabel("Text răspuns B").fill("Răspuns modificat");
  await page.getByRole("radio", { name: "Răspuns corect: B" }).check();
  await page.getByRole("button", { name: "Salvează modificările" }).click();
  await expect(page.getByRole("status")).toContainText("Modificările au fost salvate");
  expect(updated).toBe(true);
  await expect(page.getByRole("button", { name: "Salvează modificările" })).toBeDisabled();
});

test("ordinary authenticated user cannot open the editor", async ({ page }) => {
  let requests = 0;
  await page.route("**/rest/v1/question_bank**", route => { requests++; return route.fulfill({ json: [] }); });
  await login(page, "00000000-0000-0000-0000-000000000001");
  await expect(page.getByRole("alert")).toContainText("nu are acces");
  await expect(page.getByLabel("Textul întrebării")).toHaveCount(0);
  expect(requests).toBe(0);
});

test("mobile editor preserves unsaved work when category change is cancelled", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.route("**/rest/v1/question_bank**", route => route.fulfill({ json: [question], headers: { "content-range": "0-0/1", "access-control-expose-headers": "content-range" } }));
  await login(page);
  await page.getByLabel("Textul întrebării").fill("Editare nesalvată");
  page.once("dialog", dialog => dialog.dismiss());
  await page.getByLabel("Atestat și limbă").selectOption("1");
  await expect(page.getByLabel("Atestat și limbă")).toHaveValue("0");
  await expect(page.getByLabel("Textul întrebării")).toHaveValue("Editare nesalvată");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
