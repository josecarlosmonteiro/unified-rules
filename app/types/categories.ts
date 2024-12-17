export type TCategory = {
  id: string;
  title: string;
  level: number;
  startDate: string;
}

export type TNewCategory = Omit<TCategory, 'id'>;