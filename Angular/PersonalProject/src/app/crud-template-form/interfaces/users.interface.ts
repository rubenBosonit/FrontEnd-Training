import { Country } from './countries.interface';

export interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
  email: string;
  notifications: boolean;
  country: Country;
  city: string;
}
