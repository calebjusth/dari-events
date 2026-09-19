import QrScanner from 'qr-scanner';
QrScanner.WORKER_PATH = new URL('qr-scanner-worker.min.js', import.meta.url).href;

export function createScanner(videoElement, onDecode) {
  const scanner = new QrScanner(videoElement, (decoded) => {
    onDecode(decoded?.trim());
  }, { preferredCamera: 'environment' });

  return scanner;
}
