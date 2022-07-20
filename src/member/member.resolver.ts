import { Inject, UseGuards, ValidationPipe } from '@nestjs/common';
import { Member } from './member.model';
import { MemberService } from './member.service';
import { CreateMemberInput } from './member.dto';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Query(() => Member)
  getMembers() {
    return this.memberService.findAll();
  }

  @Mutation(() => Member)
  async createMember(@Args('Member') member: CreateMemberInput) {
    const res = await this.memberService.create(member);
    return await res;
  }
}
