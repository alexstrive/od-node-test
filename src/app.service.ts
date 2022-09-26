import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  signIn(): string {
    return 'Hello World!';
  }

  login(): string {
    return 'Login success';
  }

  logout(): string {
    return 'Logout success';
  }
}
