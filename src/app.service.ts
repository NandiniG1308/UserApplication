import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World! Welcome to nestjs Application';
  }

  async getRandomData() {
    const url = 'https://randomuser.me/api/';
    try {
      // Using firstValueFrom() to convert Observable -> Promise
      const response = await firstValueFrom(this.httpService.get(url));
      console.log(response.data);

      const user = response.data.results[0];

      return {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        country: user.location.country,
      };
    } catch (error) {
      throw error;
    }
  }
}
