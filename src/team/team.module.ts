import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { TeamController } from './team.controller';
import { TeamSchema } from './team.model';

@Module({
  providers: [TeamService, TeamResolver],
  controllers: [TeamController],
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
})
export class TeamModule {}
