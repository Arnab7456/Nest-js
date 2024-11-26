import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";

@Controller('users')
export class UsersController {
    /*
    Get : /users 
    Get : /user/:id
    POST : /user
    PATCH : user/:id
    DELETE : /user/:id
    */
   @Get() // GET /users or /users?role == value && age =45
   findAll(@Query('role') role?:'INTERN' | 'ADMIN' | 'ENGINEER'){
    return []
   }
   @Get('interns')
   findAllInterns(){
    return [];
   }

   @Get(':id') //  Get : /user/:id
   findOne(@Param('id') id:string){
        return {id}
   }
   @Post() //  POST : /user
   create (@Body() user:{}){
    return user
   }
  @Patch(':id') //  Get : /user/:id
  update(@Param('id') id:string, @Body() userUpdate : {}){
    return {id, ...userUpdate}
  }
  @Delete(':id') //  DELETE : /user/:id
  remove(@Param('id') id:string){
     return {id}
  }

  
}
