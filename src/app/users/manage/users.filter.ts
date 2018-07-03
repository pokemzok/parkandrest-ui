
export class UsersFilter {
  // TODO: sort, pagination etc.

  username: string;
  authority: string;
  isActive: boolean;

  static empty(): UsersFilter {
    return new UsersFilter(null, null, null );
  }

  constructor(username: string, authority: string, isActive: boolean) {
    this.username = username;
    this.authority = authority;
    this.isActive = isActive;
  }
}
