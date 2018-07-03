
export class UsersFilter {
  // TODO: sort, pagination etc.

  username: string;
  authority: string;
  isActive: string;

  static empty(): UsersFilter {
    return new UsersFilter(null, null, null );
  }

  constructor(username: string, authority: string, isActive: string) {
    this.username = username;
    this.authority = authority;
    this.isActive = isActive;
  }
}
