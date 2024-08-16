import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/Users/user.module';
import { ProductModule } from './modules/Product/product.module';
import { PurchaseModule } from './modules/Purchase/purchase.module';
import { AuthModule } from './modules/Auth/auth.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PurchaseModule,
    AuthModule,
    CacheModule.register({
      ttl: 10,
      isGlobal: true,
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
