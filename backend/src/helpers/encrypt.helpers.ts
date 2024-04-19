import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

export async function  encrytData (data:string) : Promise <Buffer> {

const iv = randomBytes(16);
const password = process.env.ENCRIPT_PASSWORD;

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.
const key = (await promisify(scrypt)(password,iv, 32)) as Buffer;
const cipher = createCipheriv('aes-256-ctr', key, iv);

const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);

return encryptedText;

}