
export class NewUserRequest {
  username: string;
  password: string;
  repeatPassword: string;
  authorities: string[];
  isActive: boolean ;
}
