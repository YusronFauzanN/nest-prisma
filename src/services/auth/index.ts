import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async helloWorld() {
    return 'Hello World!';
  }
}
