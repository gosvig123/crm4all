export type Contact = {
  id: number;
  name: string;
  assignee: string;
  dueDate: string;
  nextAction: string;
  notes: string;
};

export type ColumnData = {
  id: number;
  title: string;
  contacts: Contact[];
};

