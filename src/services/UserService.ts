import { User } from '@/models/User';

export class UserService {
  public async login(data: User) {
    const resposne = await new Promise((rel, rej) => {
      setTimeout(() => {
        rel({ token: 'erewrewrewr', user: data });
      }, 1000);
    });

    return resposne;
  }
}
