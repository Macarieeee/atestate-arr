import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { getSupabase } from "../lib/supabase";
import { ADMIN_USER_ID, adminBanks, loadAdminQuestions, saveAdminQuestion, type AdminQuestion } from "../lib/questionAdmin";
import QuestionImages from "../components/QuestionImages";

const field = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:opacity-60";
const button = "rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50";
const discard = () => window.confirm("Ai modificări nesalvate. Vrei să renunți la ele?");

export default function Admin() {
  const [userId, setUserId] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [authError, setAuthError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [bankIndex, setBankIndex] = useState(0);

  useEffect(() => {
    let active = true;
    try {
      const client = getSupabase();
      const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
        if (active) { setUserId(session?.user.id ?? null); setChecking(false); }
      });
      client.auth.getSession().then(({ error }) => {
        if (active && error) { setAuthError("Sesiunea nu a putut fi verificată. Reîncarcă pagina."); setChecking(false); }
      }).catch(() => {
        if (active) { setAuthError("Conexiunea nu este disponibilă. Reîncarcă pagina."); setChecking(false); }
      });
      return () => { active = false; subscription.unsubscribe(); };
    } catch {
      // Defer state updates outside the effect body.
      queueMicrotask(() => { if (active) { setAuthError("Configurarea Supabase lipsește."); setChecking(false); } });
      return () => { active = false; };
    }
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function login(event: FormEvent) {
    event.preventDefault(); setBusy(true); setAuthError("");
    try {
      const { error } = await getSupabase().auth.signInWithPassword({ email: email.trim(), password });
      if (error) setAuthError("Autentificarea a eșuat. Verifică e-mailul și parola.");
      else setPassword("");
    } catch { setAuthError("Nu se poate contacta serverul. Reîncearcă."); }
    finally { setBusy(false); }
  }

  async function logout() {
    if (dirty && !discard()) return;
    setBusy(true); setAuthError("");
    try {
      const { error } = await getSupabase().auth.signOut({ scope: "local" });
      if (error) throw error;
      setDirty(false); setUserId(null);
    } catch { setAuthError("Deconectarea a eșuat. Reîncearcă."); }
    finally { setBusy(false); }
  }

  return <main className="min-h-screen bg-slate-100 text-slate-900">
    <header className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">Atestate ARR</p><h1 className="mt-1 text-2xl font-bold">Administrare întrebări</h1></div>
        <nav className="flex items-center gap-5 text-sm font-semibold">
          <Link to="/" className="text-blue-700 hover:underline" onClick={e => { if (dirty && !discard()) e.preventDefault(); }}>Înapoi la site</Link>
          {userId && <button disabled={busy} onClick={logout} className="rounded-lg border border-slate-300 px-4 py-2">Deconectare</button>}
        </nav>
      </div>
    </header>
    {authError && <p role="alert" className="mx-auto mt-5 max-w-xl rounded-lg bg-red-50 p-4 text-red-800">{authError}</p>}
    {checking ? <p role="status" className="p-10 text-center">Se verifică sesiunea…</p> : !userId ?
      <section className="mx-auto mt-16 max-w-md px-5">
        <form onSubmit={login} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">Autentificare administrator</h2>
          <p className="mt-2 text-sm text-slate-600">Folosește e-mailul și parola contului de administrator.</p>
          <label className="mt-6 block text-sm font-semibold">E-mail<input className={`${field} mt-2`} type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} disabled={busy} /></label>
          <label className="mt-4 block text-sm font-semibold">Parolă<input className={`${field} mt-2`} type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} disabled={busy} /></label>
          <button className={`${button} mt-6 w-full`} disabled={busy}>{busy ? "Se autentifică…" : "Intră în administrare"}</button>
        </form>
      </section> : userId !== ADMIN_USER_ID ?
        <p role="alert" className="mx-auto mt-12 max-w-lg rounded-xl bg-white p-8">Contul autentificat nu are acces la administrare. Deconectează-te și folosește contul de administrator.</p> :
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <label className="block max-w-xl text-sm font-semibold">Atestat și limbă
            <select className={`${field} mt-2`} value={bankIndex} disabled={busy} onChange={e => {
              if (dirty && !discard()) return;
              setDirty(false); setBankIndex(Number(e.target.value));
            }}>{adminBanks.map((bank, index) => <option key={`${bank.category}-${bank.language}`} value={index}>{bank.title}</option>)}</select>
          </label>
          <BankEditor key={`${userId}-${bankIndex}`} bankIndex={bankIndex} onDirty={setDirty} onSaving={setBusy} />
        </div>}
  </main>;
}

function BankEditor({ bankIndex, onDirty, onSaving }: { bankIndex: number; onDirty: (value: boolean) => void; onSaving: (value: boolean) => void }) {
  const bank = adminBanks[bankIndex];
  const [questions, setQuestions] = useState<AdminQuestion[]>([]);
  const [draft, setDraft] = useState<AdminQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const original = questions.find(q => q.id === draft?.id);
  const dirty = !!draft && JSON.stringify(draft) !== JSON.stringify(original);
  useEffect(() => { onDirty(dirty); }, [dirty, onDirty]);
  useEffect(() => {
    const controller = new AbortController();
    loadAdminQuestions(bank.category, bank.language, controller.signal).then(data => {
      if (!controller.signal.aborted) { setQuestions(data); setDraft(data[0] ?? null); setLoading(false); }
    }).catch(() => {
      if (!controller.signal.aborted) { setLoadError("Întrebările nu au putut fi încărcate."); setLoading(false); }
    });
    return () => controller.abort();
  }, [bank.category, bank.language, attempt]);

  const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const term = normalize(search.trim());
  const filtered = questions.filter(q => normalize(`${q.id} ${q.sourceNo} ${q.text} ${q.answers.map(a => a.text).join(" ")}`).includes(term));

  function select(question: AdminQuestion) {
    if (dirty && !discard()) return;
    setDraft(question); setMessage(""); setSaveError("");
  }
  async function save(event: FormEvent) {
    event.preventDefault();
    if (!draft || saving) return;
    setSaving(true); onSaving(true); setMessage(""); setSaveError("");
    try {
      const saved = await saveAdminQuestion(bank.category, bank.language, draft);
      setQuestions(all => all.map(q => q.id === saved.id ? saved : q)); setDraft(saved);
      setMessage("Modificările au fost salvate. Sunt disponibile la următoarea încărcare a întrebărilor.");
    } catch (error) { setSaveError(error instanceof Error ? error.message : "Salvarea a eșuat."); }
    finally { setSaving(false); onSaving(false); }
  }

  if (loading) return <p role="status" className="py-10">Se încarcă întrebările…</p>;
  if (loadError) return <div role="alert" className="py-8"><p>{loadError}</p><button className={`${button} mt-4`} onClick={() => { setLoadError(""); setLoading(true); setAttempt(a => a + 1); }}>Reîncearcă</button></div>;
  return <div className="mt-6 grid items-start gap-6 lg:grid-cols-[340px_1fr]">
    <aside className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-4">
        <label className="text-sm font-semibold">Caută după text sau număr<input className={`${field} mt-2`} type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Ex.: frânare, 028…" /></label>
        <p className="mt-3 text-xs text-slate-500">{filtered.length} din {questions.length} întrebări</p>
      </div>
      <div className="max-h-72 overflow-y-auto lg:max-h-[65vh]">
        {!filtered.length && <p className="p-5 text-sm text-slate-500">Nicio întrebare găsită.</p>}
        {filtered.map(q => <button key={q.id} disabled={saving} aria-current={q.id === draft?.id ? "true" : undefined} onClick={() => select(q)} className={`block w-full border-b border-slate-100 p-4 text-left hover:bg-blue-50 ${q.id === draft?.id ? "border-l-4 border-l-blue-700 bg-blue-50" : "border-l-4 border-l-transparent"}`}>
          <span className="text-xs font-bold text-blue-700">#{q.id} · Nr. sursă {q.sourceNo}</span><span className="mt-1 block line-clamp-2 text-sm">{q.text}</span>
        </button>)}
      </div>
    </aside>
    {draft ? <form onSubmit={save} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><h2 className="text-xl font-bold">Întrebarea #{draft.id}</h2><span className={`rounded-full px-3 py-1 text-xs font-semibold ${dirty ? "bg-amber-100 text-amber-900" : "bg-slate-100 text-slate-600"}`}>{dirty ? "Modificări nesalvate" : "Salvată"}</span></div>
      <fieldset disabled={saving}>
        <label className="block text-sm font-semibold">Textul întrebării<textarea className={`${field} mt-2 min-h-28`} required value={draft.text} onChange={e => { setMessage(""); setDraft({ ...draft, text: e.target.value }); }} /></label>
        <QuestionImages images={draft.images} />
        <fieldset className="mt-6"><legend className="font-semibold">Variante de răspuns</legend><p className="mt-1 text-sm text-slate-500">Bifează cercul din dreptul răspunsului corect.</p>
          <div className="mt-4 space-y-3">{draft.answers.map(answer => <div key={answer.key} className={`flex items-start gap-3 rounded-xl border p-3 ${draft.correct === answer.key ? "border-emerald-400 bg-emerald-50" : "border-slate-200"}`}>
            <label className="flex shrink-0 cursor-pointer items-center gap-2 pt-3 font-bold"><input type="radio" name="correct" aria-label={`Răspuns corect: ${answer.key.toUpperCase()}`} checked={draft.correct === answer.key} onChange={() => { setMessage(""); setDraft({ ...draft, correct: answer.key }); }} className="h-4 w-4 accent-emerald-700" />{answer.key.toUpperCase()}</label>
            <textarea aria-label={`Text răspuns ${answer.key.toUpperCase()}`} required className={`${field} min-h-20`} value={answer.text} onChange={e => { setMessage(""); setDraft({ ...draft, answers: draft.answers.map(a => a.key === answer.key ? { ...a, text: e.target.value } : a) }); }} />
          </div>)}</div>
        </fieldset>
      </fieldset>
      {saveError && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800">{saveError}</p>}
      {message && <p role="status" className="mt-5 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{message}</p>}
      <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
        <button className={button} disabled={!dirty || saving}>{saving ? "Se salvează…" : "Salvează modificările"}</button>
        <button type="button" className="rounded-lg border border-slate-300 px-4 py-2.5 font-semibold disabled:opacity-50" disabled={!dirty || saving} onClick={() => { if (original && discard()) { setDraft(original); setSaveError(""); setMessage(""); } }}>Renunță la modificări</button>
      </div>
    </form> : <p className="p-6">Nu există întrebări în această categorie.</p>}
  </div>;
}
