import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Team } from './team.model';
import { CreateTeamInput, UpdateTeamInput } from './team.dto';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async create(team: CreateTeamInput): Promise<Team> {
    console.log({ team });
    const teamModel = new this.teamModel(team);
    return await teamModel.save();
  }

  async update(team: UpdateTeamInput): Promise<Team> {
    return await this.teamModel.findOneAndUpdate({ id: team }, { ...team });
  }

  async findTeamById(id: string): Promise<Team> {
    const res = await this.teamModel.findById(id);
    return res;
  }

  async findAllTeams(): Promise<Team[]> {
    const res = await this.teamModel.find().populate('children');

    console.log(res);
    return res;
  }

  async findMainTeams(): Promise<Team[]> {
    const res = await this.teamModel.find({ level: 0 });

    return res;
  }
}
