import { Field, ID, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

import { Schema as MongooseSchema } from 'mongoose';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Member } from '../member/member.entity';
import { Team } from './team.model';

@InputType('createTeamInput')
export class CreateTeamInput {
  @Field(() => String)
  key: string;
  @Field(() => String)
  title: string;
}

@InputType('updateTeamInput')
export class UpdateTeamInput {
  @Field(() => String)
  key: string;
  @Field(() => String)
  title: string;
}
