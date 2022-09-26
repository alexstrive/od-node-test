import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  nickname: string;
}

export class LoginDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class LogoutDTO {}
