import { Module } from '@nestjs/common';
import { AuthModule } from '../auth';
import { PrismaModule } from '../prisma';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
