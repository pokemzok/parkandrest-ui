
export interface NewUserForm {
  username: string;
  passwords: PasswordsForm;
  authorities: string[];
  isActive: boolean ;
}

interface PasswordsForm {
  password: string;
  repeatPassword: string;
}
