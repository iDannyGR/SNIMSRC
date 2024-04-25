import { createCipheriv, randomBytes } from 'crypto';

export function encrptPsw(data: string) {
  const algoritm: string = 'aes-256-cbc';
  const key = randomBytes(32);
  const iv = randomBytes(32);

  const cipher = createCipheriv(algoritm, key, iv);
  const paswEncript = Buffer.concat([cipher.update(data), cipher.final()]);

  return paswEncript.toString('hex');
}
