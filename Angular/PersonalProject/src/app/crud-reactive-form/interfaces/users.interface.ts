import { Country } from './countries.interface';

export interface User {
  id?: number;
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  promotion: boolean;
  country: Country;
  city: string;
}
