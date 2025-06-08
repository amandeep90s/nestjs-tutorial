import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id{/:optional}') // For adding optional path parameters, then use curly braces for example: @Get('{/:id}')
  public getUsers(@Param() params: { id: string }, @Query() query: any) {
    console.log('Params:', params);
    console.log('Query:', query);

    return 'List of users';
  }

  @Post()
  public createUser(@Body() body: any) {
    console.log('Request Body:', body);
    return 'User created';
  }
}
