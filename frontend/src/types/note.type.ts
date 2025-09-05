export type NoteType = {
  id?: string;
  siteId: string;
  object: string;
  description: string;
  result: string;
  authorId: string;
  deleteAt?: Date | null;
};
