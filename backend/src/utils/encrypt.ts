import { hash, compare } from 'bcrypt';

const saltRounds = 10; // Número de rondas de sal para bcrypt

export async function hashPassword(password: string): Promise<string> {
  return hash(password, saltRounds);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword);
}
