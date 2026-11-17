# Stable_marriage

Interactive Gale-Shapley Stable Marriage Matching Platform for Spatial Crowdsourcing task assignment.

---

## 🚀 Deploy to Vercel

This repository is pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via GitHub (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Configure project for Vercel deployment"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** -> **Project**.
4. Import your GitHub repository.
5. In **Environment Variables**, add the following 3 variables (from your `.env` or Supabase project settings):
   - `SUPABASE_URL` = `https://your-project.supabase.co`
   - `SUPABASE_KEY` = `your-supabase-anon-key`
   - `SUPABASE_SERVICE_ROLE_KEY` = `your-supabase-service-role-key`
6. Click **Deploy**.

---

### Option 2: Deploy via Vercel CLI

1. Run the Vercel CLI from your terminal:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts to link your project.
3. Add your environment variables:
   ```bash
   npx vercel env add SUPABASE_URL
   npx vercel env add SUPABASE_KEY
   npx vercel env add SUPABASE_SERVICE_ROLE_KEY
   ```
4. Deploy to production:
   ```bash
   npx vercel --prod
   ```

---

## 🛠 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Ensure you have your `.env` file with:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   PORT=3000
   ```
3. Start the local server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Architecture on Vercel

- **Static Frontend**: [`index.html`](index.html), [`demo.html`](demo.html), [`style.css`](style.css), [`script.js`](script.js), etc., are served directly from Vercel's global CDN Edge network.
- **Serverless API**: Requests to `/api/*` are handled by [`api/index.js`](api/index.js) running as a Vercel Serverless Function backed by Express.
- **Routing**: Configured via [`vercel.json`](vercel.json).
