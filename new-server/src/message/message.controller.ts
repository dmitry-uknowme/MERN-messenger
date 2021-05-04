import { Controller, Get } from '@nestjs/common';

@Controller('/messages')
export class MessageController {
  create() {}
  @Get()
  getAll() {
    return 'messages';
  }
  getOne() {}
  delete() {}
}
