import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './users/user.module';
@Module({
  imports: [HttpModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
