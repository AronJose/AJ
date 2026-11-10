# Aron Jose Portfolio

Create React App portfolio for Aron Jose. The site is deployed as a static GitHub Pages build. The portfolio assistant UI is in `src/components/ChatbotWidget.js`; its API and private knowledge base are in `netlify/functions/api.js`.

## Chatbot deployment

The secure Gemini endpoint runs as a Netlify Function. GitHub Pages cannot run server-side code, so deploy the function to Netlify (or port it to another serverless host) and configure:

- `GEMINI_API_KEY`: Gemini API key, set only in the function host's environment settings.
- `ALLOWED_ORIGIN`: `https://aronjose.in` (optional; this is the default).
- `REACT_APP_CHAT_API_URL`: set at React build time only when the API is hosted on a different origin, for example `https://api.example.com`. Leave unset when the function is served from the same origin.

The function accepts `POST /api/chat` with `{ "message": "..." }` and returns `{ "reply": "..." }`. It limits messages to 2,000 characters and applies a per-instance rate limit. Netlify's `netlify.toml` routes `/api/chat` to the function. Keep `GEMINI_API_KEY` out of frontend environment variables and source control.

## Local development

Run `npm start` to work on the portfolio UI. To exercise the serverless endpoint locally, install/use the Netlify CLI and run `netlify dev` with `GEMINI_API_KEY` configured in the local environment.

Run `npm run build` to create the static portfolio build.
