import { c as createComponent } from './astro-component_C0wE0kuq.mjs';
import 'piccolore';
import { r as renderTemplate, o as renderHead } from './entrypoint_BzTfj7US.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Verify = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-iv4vc336> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>QR Verification</title>', `</head> <body data-astro-cid-iv4vc336> <div class="container" data-astro-cid-iv4vc336> <div class="header" data-astro-cid-iv4vc336> <h1 data-astro-cid-iv4vc336>QR VERIFICATION</h1> <p data-astro-cid-iv4vc336>Point the camera at an invitation QR code</p> </div> <div class="scanner" id="scanner" data-astro-cid-iv4vc336> <video id="video" autoplay playsinline muted data-astro-cid-iv4vc336></video> <div class="overlay" data-astro-cid-iv4vc336></div> </div> <div class="status" id="status" data-astro-cid-iv4vc336> <div id="result" data-astro-cid-iv4vc336></div> <button id="scanNext" class="btn" style="display:none" data-astro-cid-iv4vc336>SCAN NEXT</button> </div> </div> <script type="module">
      import QrScanner from 'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner.min.js';

      const video = document.getElementById('video');
      const resultEl = document.getElementById('result');
      const scanNextBtn = document.getElementById('scanNext');

      let scanning = false;
      let lastToken = null;

      QrScanner.WORKER_PATH = 'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner-worker.min.js';

      const scanner = new QrScanner(video, async (decoded) => {
        if (scanning === false) return;
        // Extract token: accept raw token or URL with /v/<token>
        let token = decoded?.trim();
        try {
          const url = new URL(token);
          const parts = url.pathname.split('/').filter(Boolean);
          const vIndex = parts.indexOf('v');
          if (vIndex >= 0 && parts[vIndex+1]) token = parts[vIndex+1];
          else token = parts[parts.length-1] || token;
        } catch (e) {
          // not a url, keep token
        }

        if (!token || token === lastToken) return;
        lastToken = token;
        scanning = false;
        scanner.stop();
        resultEl.textContent = 'Checking...';

        try {
          const res = await fetch('/api/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) });
          const data = await res.json();
          if (data.valid) {
            resultEl.innerHTML = \`<div class="success">✓ VALID QR CODE</div><div>Source: \${data.source ?? '—'}</div><div>Expires: \${data.expiresAt ?? '—'}</div>\`;
          } else {
            resultEl.innerHTML = \`<div class="error">✕ NO QR CODE FOUND</div>\`;
          }
        } catch (err) {
          resultEl.innerHTML = \`<div class="error">✕ Network error</div>\`;
        }

        scanNextBtn.style.display = 'block';
      }, { preferredCamera: 'environment' });

      async function startCamera() {
        try {
          await scanner.start();
          scanning = true;
          lastToken = null;
          resultEl.textContent = '';
          scanNextBtn.style.display = 'none';
        } catch (err) {
          resultEl.innerHTML = '<div class="error">Camera access is required. Please enable camera permissions.</div>';
        }
      }

      scanNextBtn.addEventListener('click', async () => {
        await startCamera();
      });

      // Start immediately
      startCamera();

      // Clean up on page unload
      window.addEventListener('beforeunload', () => {
        scanner.stop();
      });
    <\/script> </body> </html>`], ['<html lang="en" data-astro-cid-iv4vc336> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>QR Verification</title>', `</head> <body data-astro-cid-iv4vc336> <div class="container" data-astro-cid-iv4vc336> <div class="header" data-astro-cid-iv4vc336> <h1 data-astro-cid-iv4vc336>QR VERIFICATION</h1> <p data-astro-cid-iv4vc336>Point the camera at an invitation QR code</p> </div> <div class="scanner" id="scanner" data-astro-cid-iv4vc336> <video id="video" autoplay playsinline muted data-astro-cid-iv4vc336></video> <div class="overlay" data-astro-cid-iv4vc336></div> </div> <div class="status" id="status" data-astro-cid-iv4vc336> <div id="result" data-astro-cid-iv4vc336></div> <button id="scanNext" class="btn" style="display:none" data-astro-cid-iv4vc336>SCAN NEXT</button> </div> </div> <script type="module">
      import QrScanner from 'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner.min.js';

      const video = document.getElementById('video');
      const resultEl = document.getElementById('result');
      const scanNextBtn = document.getElementById('scanNext');

      let scanning = false;
      let lastToken = null;

      QrScanner.WORKER_PATH = 'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner-worker.min.js';

      const scanner = new QrScanner(video, async (decoded) => {
        if (scanning === false) return;
        // Extract token: accept raw token or URL with /v/<token>
        let token = decoded?.trim();
        try {
          const url = new URL(token);
          const parts = url.pathname.split('/').filter(Boolean);
          const vIndex = parts.indexOf('v');
          if (vIndex >= 0 && parts[vIndex+1]) token = parts[vIndex+1];
          else token = parts[parts.length-1] || token;
        } catch (e) {
          // not a url, keep token
        }

        if (!token || token === lastToken) return;
        lastToken = token;
        scanning = false;
        scanner.stop();
        resultEl.textContent = 'Checking...';

        try {
          const res = await fetch('/api/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) });
          const data = await res.json();
          if (data.valid) {
            resultEl.innerHTML = \\\`<div class="success">✓ VALID QR CODE</div><div>Source: \\\${data.source ?? '—'}</div><div>Expires: \\\${data.expiresAt ?? '—'}</div>\\\`;
          } else {
            resultEl.innerHTML = \\\`<div class="error">✕ NO QR CODE FOUND</div>\\\`;
          }
        } catch (err) {
          resultEl.innerHTML = \\\`<div class="error">✕ Network error</div>\\\`;
        }

        scanNextBtn.style.display = 'block';
      }, { preferredCamera: 'environment' });

      async function startCamera() {
        try {
          await scanner.start();
          scanning = true;
          lastToken = null;
          resultEl.textContent = '';
          scanNextBtn.style.display = 'none';
        } catch (err) {
          resultEl.innerHTML = '<div class="error">Camera access is required. Please enable camera permissions.</div>';
        }
      }

      scanNextBtn.addEventListener('click', async () => {
        await startCamera();
      });

      // Start immediately
      startCamera();

      // Clean up on page unload
      window.addEventListener('beforeunload', () => {
        scanner.stop();
      });
    <\/script> </body> </html>`])), renderHead());
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/verify.astro", void 0);

const $$file = "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/verify.astro";
const $$url = "/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Verify,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
