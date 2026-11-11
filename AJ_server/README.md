# Aron Jose Portfolio

The portfolio frontend is in the sibling `AJ/frontend/` folder. This `AJ_server/` folder contains the **Ask Aron AI** server code: the Vercel Function handler, deployment config, and verified chatbot knowledge base.

## Local development

1. Install frontend dependencies with `cd ../AJ/frontend && npm install`.
2. Create `.env.local` in this folder with `AI_PROVIDER=gemini` and `GEMINI_API_KEY=your_gemini_api_key`.
3. Install Vercel CLI (`npm install --global vercel`) and run `vercel dev` from this folder. In Vercel, set the project root directory to `AJ_server`; the config builds the sibling `AJ/frontend/` app and exposes `/api/chat` from `api/chat.js`.

The Gemini key must stay in server environment variables. Do not use a `REACT_APP_` variable for secrets.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, import the repository and set **Root Directory** to `AJ_server`. The `AJ_server/vercel.json` config builds the app in `AJ/frontend/`, while the function entry point is `AJ_server/api/chat.js`.
3. Add `AI_PROVIDER=gemini` and `GEMINI_API_KEY` under **Project Settings → Environment Variables** for Production (and Preview/Development if needed). Optionally set `GEMINI_MODEL`.
4. Deploy. Vercel hosts the static portfolio and `/api/chat` in the same project.
5. Assign `aronjose.in` under **Project Settings → Domains** and apply the DNS records Vercel shows. Production verification requires a configured key and completed deployment.

The existing downloadable resume is served from `AJ/frontend/public/AronResume.pdf` at `/AronResume.pdf`.

## Chat API

`api/chat.js` exposes `POST /api/chat` and delegates to `chat.js`. It accepts `{ "message": "...", "history": [{"role":"user|assistant","content":"..."}] }` and responds with `{ "success": true, "answer": "..." }`. `aron-knowledge.json` contains the profile data. Inputs and recent history are bounded, and an in-memory per-function-instance rate limit is applied. Vercel's shared hosting does not make in-memory limits globally consistent; use platform-level protection if stricter global limits are required.

Only Gemini is implemented. `AI_PROVIDER` is reserved for future provider selection; no OpenAI integration is included yet.
