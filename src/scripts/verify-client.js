import QrScanner from 'qr-scanner';
import workerUrl from 'qr-scanner/qr-scanner-worker.min.js?url';

QrScanner.WORKER_PATH = workerUrl;

export function createScanner(videoElement, onDecode) {
  const scanner = new QrScanner(
    videoElement,
    (decoded) => {
      onDecode(decoded?.trim());
    },
    {
      preferredCamera: 'environment',
      // keep trying continuously
      returnDetailedScanResult: false,
    }
  );

  return scanner;
}
