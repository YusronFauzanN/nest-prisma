import { Controller, Get } from '@nestjs/common';
import { AuthService } from 'src/services';

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  async helloWorld() {
    return this.appService.helloWorld();
  }
}
