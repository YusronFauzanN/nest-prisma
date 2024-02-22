import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
