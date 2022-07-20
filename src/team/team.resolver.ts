import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateTeamInput } from './team.dto';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => [Team])
  async getTeams() {
    const res = await this.teamService.findMainTeams();
    return res;
  }

  @Query(() => Team)
  async getTeamById(@Args('TeamId') id: string) {
    const res = await this.teamService.findTeamById(id);
    console.log({ id });
    console.log({ res });
    return await res;
  }

  @Query(() => [Team])
  async getAllTeam() {
    const res = await this.teamService.findAllTeams();
    console.log({ res });
    return await res;
  }

  @Mutation(() => Team)
  async createTeam(@Args('Team') team: UpdateTeamInput) {
    const res = await this.teamService.create(team);
    return await res;
  }

  @Mutation(() => Team)
  async updateTeam(@Args('Team') team: UpdateTeamInput) {
    const res = await this.teamService.update(team);
    console.log({ team });
    console.log({ res });
    return await res;
  }
}
