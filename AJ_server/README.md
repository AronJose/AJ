# Ask Aron AI deployment

The repository contains two separate applications: the Create React App portfolio in `frontend/` and the Node.js chatbot function in `AJ_server/`. Deploy them as two Vercel projects from the same GitHub repository. This keeps both on Vercel and avoids moving or rewriting the existing portfolio.

## 1. Deploy the backend

Create a Vercel project from `AronJose/AJ` with:

| Setting | Value |
| --- | --- |
| Root Directory | `AJ_server` |
| Framework Preset | Other |
| Build Command | Leave default / blank |
| Install Command | Leave default |
| Output Directory | Leave default / blank |

The function is auto-detected from `api/chat.js` and is available at `/api/chat`. `vercel.json` intentionally has no legacy `builds` or catch-all `routes` rules.

Add these Production environment variables in Vercel:

| Name | Value |
| --- | --- |
| `AI_PROVIDER` | `gemini` |
| `GEMINI_API_KEY` | Your Gemini API key |
| `CORS_ORIGIN` | `https://aronjose.in,https://www.aronjose.in` |

Add the same values to Preview if you want to test preview deployments. For preview browser tests, include the exact preview frontend origin in `CORS_ORIGIN` as a comma-separated entry. After deploying, copy the backend deployment domain from **Vercel → Project → Settings → Domains** (or the deployment page). Do not guess this URL.

## 2. Deploy the frontend

Create another Vercel project from the same repository with:

| Setting | Value |
| --- | --- |
| Root Directory | `frontend` |
| Framework Preset | Create React App |
| Build Command | `npm run build` (or the detected default) |
| Install Command | `npm install` (or the detected default) |
| Output Directory | `build` (or the detected default) |

Set this Production environment variable after the backend is deployed:

| Name | Value |
| --- | --- |
| `REACT_APP_CHAT_API_URL` | `https://<backend-domain-from-vercel>/api/chat` |

Replace the placeholder with the actual backend URL shown in Vercel. CRA embeds `REACT_APP_*` variables at build time, so redeploy the frontend after changing this value. Assign `aronjose.in` to the frontend Vercel project and follow Vercel's domain/DNS instructions. Keep the backend on its generated Vercel domain unless you want to configure another domain for it.

## 3. Verify

Send a POST request to `https://<backend-domain-from-vercel>/api/chat` with JSON:

```json
{"message":"What projects has Aron worked on?","history":[]}
```

Expect `{ "success": true, "answer": "..." }` when the Gemini key is configured. Then open `https://aronjose.in`, open Ask Aron AI, and send a question. The backend accepts browser requests from the configured CORS origins only. A request without an `Origin` header can also be used for command-line checks.

## Local environment safety

Use `AJ_server/.env.local` for local values. `.env*` files are ignored by Git except `.env.example`, which contains placeholders only. Never add a real Gemini key to frontend variables or source code. If a real key was ever committed to GitHub, revoke and replace it in Google AI Studio.

## API behavior

`api/chat.js` is the Vercel entry point and delegates to `chat.js`. It reads `aron-knowledge.json`, bounds the message and history sizes, keeps conversation context supplied by the client, and returns a verified-information fallback when a response cannot be grounded. Gemini errors are returned as safe API errors without exposing the key.
