import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Member } from '../member/member.entity';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType('Team')
export class Team {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String, { nullable: true })
  key: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Team.name }] })
  @Field(() => [Team], { nullable: true })
  children: Team[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
