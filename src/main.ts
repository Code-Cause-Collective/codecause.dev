import './app';
import { randomUUID } from './utils/generateUUID';

const NONCE = randomUUID();

let meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');

if (!meta) {
  meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  document.head.appendChild(meta);
}

const csp = `object-src 'none'; media-src 'none'; base-uri 'none'; script-src 'self' 'nonce-${NONCE}'; style-src 'nonce-${NONCE}'; img-src 'self' 'nonce-${NONCE}';`;

meta.setAttribute('content', `${csp}`);
