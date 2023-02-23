import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { Hero } from './models/hero.model';
import { GetHeroesQuery } from './queries/impl';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    const result = this.commandBus.execute(
      new KillDragonCommand(id, dto.dragonId),
    );

    console.log(`got a result from commandBus ${JSON.stringify(result)}`);
    console.log(`--- Return in controller`);
    return result;
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
