export type NoteType = {
  siteId: string;
  object: string;
  description: string;
  result: string;
  authorId: string;
  deleteAt?: Date | null;
  // Puedes añadir más campos opcionales si necesitas
  [key: string]: any;
};
