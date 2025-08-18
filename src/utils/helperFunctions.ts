import { v4 as uuidv4 } from 'uuid';
export function UUIDv4(): string {
  if (crypto && typeof crypto?.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback
  return uuidv4();
}
