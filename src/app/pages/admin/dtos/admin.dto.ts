export interface AdminDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: number;
  password?: string;
  token?: string;
}
