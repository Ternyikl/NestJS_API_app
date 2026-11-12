import { Controller, Get, Render, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {

  nevek: string[] = ["Ádám", "Éva", "Dávid", "Boldizsár"];

  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('nevek')
  getNevek(){
    return this.nevek
  }

  @Get('nevek/:id')
  getNev(@Param('id') id: string){
    const index = Number(id)

    return this.nevek[index]
  }

  @Delete('nevek/:id')
  delNev(@Param('id') id: string){
    const index = Number(id)

    this.nevek.splice(index, 1)
  }

}
