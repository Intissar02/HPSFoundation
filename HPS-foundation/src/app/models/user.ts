export class User {
    email: string = '';
    password: string = '';
    isLoggedIn: boolean = false;
  
    constructor(userResponse: any = {}) {
      this.email = userResponse.email || '';
      this.password = userResponse.password || '';
      this.isLoggedIn = !!userResponse.isLoggedIn;
    }
  }
  
  export const LoggedOutUser: User = {
    email: '',
    password: '',
    isLoggedIn: false
  };
  