export type ServiceProvider = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  service: string | null;
  rate: number | null;
};
