import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserPayload {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
export class LogoutUserPayload {
  @IsNotEmpty()
  @IsString()
  username: string;
}
