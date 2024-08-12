import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/Users/user.module';
import { ProductModule } from './modules/Product/product.module';
import { PurchaseModule } from './modules/Purchase/purchase.module';
import { AuthModule } from './modules/Auth/auth.module';

@Module({
  imports: [UserModule, ProductModule, PurchaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
