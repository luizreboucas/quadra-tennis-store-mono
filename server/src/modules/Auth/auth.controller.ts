import { Body, Controller, Post, Req, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/utils/zod-validation-pipe';
import { AuthDTO, authSchema } from './DTO/AuthDTO';
import { AuthService } from './auth.service';

@Controller('/login')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(authSchema))
  async login(@Body() data: AuthDTO) {
    return await this.authService.login(data);
  }
}
