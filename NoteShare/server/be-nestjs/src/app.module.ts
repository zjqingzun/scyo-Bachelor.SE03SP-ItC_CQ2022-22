import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Để sử dụng biến môi trường từ .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // Không nên bật ở môi trường production
    }),
    AuthModule,
    NotesModule,
    ShareModule,
  ],
})
export class AppModule {}