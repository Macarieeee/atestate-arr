# Atestate ARR

## CA Marfă

Categoria `ca-marfa` folosește cele 355 de întrebări din `src/data/ca_marfa.pdf`,
exportate din `src/data/caMarfaQuestions.ts` în Supabase, și cinci ilustrații în `public/ca-marfa`.
Mediul de învățare parcurge întreaga bancă; testul de antrenament selectează
30 de întrebări, cu 30 de minute și prag de 21 de răspunsuri corecte.

Reextragere: `python scripts/import_ca_marfa.py --write` (necesită `pymupdf`).
Răspunsurile provin din evidențierile PDF-ului, cu o excepție documentată în script:
întrebarea 028 de la pagina 35, fără evidențiere, completată conform art. 4(g)
din Regulamentul 561/2006. Numerotarea sursei se reia între capitole;
ID-urile interne sunt unice pentru întreaga bancă.

## Conectare Supabase

### Administrare

Deschide `/atestate/admin` (sau `/atestate/#/admin`) și autentifică-te cu e-mailul
și parola contului Supabase `ee76fecc-6cd2-4568-b73f-24276961ae14`.
Pagina permite selectarea categoriei/limbii, căutarea după text sau număr,
editarea întrebării și variantelor și alegerea răspunsului corect.
Salvarea este imediată în Supabase; sesiunile noi de învățare și test citesc datele actualizate.

Migrarea `202610300002_question_admin.sql` acordă acces UPDATE doar acestui
utilizator prin RLS și doar coloanelor `text`, `answers`, `correct`.
O revizie incrementată în baza de date împiedică suprascrierea editărilor concurente.
Nu sunt necesare chei secrete în browser. URL-ul fără `#` redirecționează la ruta
HashRouter prin `public/admin/index.html`, inclusiv pe hosting static.

După editări în admin, Supabase este sursa curentă. Nu rula din nou migrarea
inițială de import fără să vrei explicit înlocuirea editărilor cu datele locale.
`supabase:verify` compară cu importul inițial și va raporta diferențele intenționate.

1. Copiază `.env.example` în `.env.local` dacă fișierul local nu există.
2. Din panoul **Connect** al proiectului Supabase, completează URL-ul și cheia
   publică în `.env.local`:

   ```dotenv
   VITE_SUPABASE_URL=https://PROJECT_ID.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
   ```

   Este acceptată și cheia publică legacy `anon` în aceeași variabilă.
   Nu utiliza `service_role` sau chei secrete: variabilele `VITE_*` sunt publice în browser.
3. Rulează `npm install`, apoi `npm run dev`. Repornește Vite după modificarea variabilelor.
4. În cod, importă `getSupabase` din `src/lib/supabase.ts` și apelează
   `getSupabase()` pentru clientul comun. Funcția explică ce lipsește dacă nu ai configurat mediul.

### Migrarea întrebărilor

Aplicația citește întrebările și răspunsurile exclusiv din `public.question_bank`.
Fișierele TypeScript cu întrebări sunt păstrate ca surse pentru export și verificare;
nu sunt încărcate de interfață și nu există revenire automată la datele locale.

1. Rulează `npm run supabase:export` pentru a genera SQL-ul din toate cele șase bănci.
2. Deschide SQL Editor în proiectul Supabase și rulează întregul fișier
   `supabase/migrations/202610300001_question_banks.sql`.
   Acesta creează tabelul, activează RLS, permite doar citirea din browser și importă
   întrebările într-o singură tranzacție. Poate fi rulat din nou: actualizează
   înregistrările cu aceeași categorie, limbă și ID, fără a șterge alte rânduri.
3. Rulează `npm run supabase:verify`. Verificarea folosește cheia publică și compară
   fiecare întrebare, răspuns și referință de imagine cu sursa locală.
4. Deschide mediul de învățare și testul. Dacă migrarea nu a fost aplicată sau
   conexiunea e indisponibilă, interfața afișează o eroare și permite reîncercarea.
   Cronometrul începe numai după încărcarea completă a băncii.

Date inițiale: CA Marfă RO 355; Manager RO 240; Taxi RO/EN câte 172;
Închiriere RO/EN câte 187. Total: 1.313 întrebări.
Imaginile rămân în `public/ca-marfa`, cu referințele salvate în tabel.
Rezultatele examenelor rămân în sesiunea curentă; această migrare privește întrebările.
După orice reextragere din PDF, regenerează și aplică SQL-ul pentru a actualiza baza.

La publicare, variabilele trebuie să existe în mediul în care rulează `npm run build`
(și pentru `npm run deploy`, care construiește aplicația înainte de publicarea pe GitHub Pages).

Documentație: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
