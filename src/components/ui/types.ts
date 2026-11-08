export interface InsetItem {
  mark?: string;
  tint?: "blue" | "indigo" | "orange" | "green" | "pink" | "gray";
  title: string;
  subtitle?: string;
  meta?: string;
  live?: boolean;
  body?: string;
}
