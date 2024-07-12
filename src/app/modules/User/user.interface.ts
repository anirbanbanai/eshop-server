export interface IUser {
  name: string;
  email: string;
  image: string;
  password: string;
  role: 'admin' | 'user';
}
