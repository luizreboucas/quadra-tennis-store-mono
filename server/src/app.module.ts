import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/Users/user.module';
import { ProductModule } from './modules/Product/product.module';
import { PurchaseModule } from './modules/Purchase/purchase.module';
import { AuthModule } from './modules/Auth/auth.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PurchaseModule,
    AuthModule,
    CacheModule.register({
      store: redisStore,
      ttl: 10 * 1000,
      isGlobal: true,
      host: 'localhost',
      port: 6379,
      max: 100,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
