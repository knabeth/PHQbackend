import { Field, ID, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

import { Schema as MongooseSchema } from 'mongoose';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType('memberInput')
export class CreateMemberInput {
  @Field(() => String)
  name: string;
  @Field(() => [String])
  members: string[];
}
