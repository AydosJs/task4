export type UserValues = {
  id?: number | string | null;
  name?: string | null;
  email: string;
  password: string;
  position?: string | null;
  registered?: Date | null;
  lastLogin?: Date | null;
  status?: string | null;
};
