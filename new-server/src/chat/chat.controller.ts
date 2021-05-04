import { Controller, Get } from '@nestjs/common';

@Controller('/chats')
export class ChatController {
  create() {}
  @Get()
  getAll() {
    return 'chats';
  }
  getOne() {}
  delete() {}
}
