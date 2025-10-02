export interface personType {
  id: number;
  name: string | null;
}
export interface DropdownProps {
  value: personType | null;
  onChange: (value: personType | null) => void;
}
