import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://jvlimasm:o4dzltZ5IA8rRQnj@cluster0.xktj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [],
  providers: [],
})
export class AppModule {}
