import { Body, Controller, Post } from '@nestjs/common';
import { LogInDto } from './dtos/log-in.dto';

@Controller()
export class LogInController {
  @Post('/auth/log-in')
  async logIn(@Body() logInDto: LogInDto): Promise<any> {
    return {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoic29vaHl1bjNAZ21haWwuY29tIiwiaWF0IjoxNjg5MzY1NjAyLCJleHAiOjE2ODkzNjU2NjJ9.2WaFpylzYtHjR_2Y7oC7Jy3nYHAJG4CwAIYRShETBZE',
    };
  }
}
