import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req: Request & { session: { data: { username: string } } } = context
      .switchToHttp()
      .getRequest();
    const session = req.session.data;

    return session ? true : false;
  }
}
