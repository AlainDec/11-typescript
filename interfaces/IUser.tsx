interface IUser {
    Username: string;
    Phone: string;
    Mail: string;
    Age: number;
    isLogged: boolean;
    isAdmin: boolean | undefined;
  }

  interface IHello {
    name: string;
    enthusiasmLevel?: number;
  }