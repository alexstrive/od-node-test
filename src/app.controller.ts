import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LoginDTO } from './dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDTO) {
    return this.authService.login(req.user);
  }

  @ApiBearerAuth('ApiKeyAuth')
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // I suppose it should be called sign-up
  // Since it is creating a new user
  // @Post('/signin')
  // signIn(): string {
  //   return this.appService.signIn();
  // }

  // @Post('/login')
  // login(): string {
  //   return this.appService.login();
  // }

  // @Post('logout')
  // logout(): string {
  //   return this.appService.logout();
  // }
}
