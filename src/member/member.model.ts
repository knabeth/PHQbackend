import { ObjectType, Field } from '@nestjs/graphql';
import { SchemaFactory } from '@nestjs/mongoose';

@ObjectType('Member')
export class Member {
  @Field()
  name!: string;
  @Field(() => [String])
  teams!: string[];
}

export type MemberDocument = Member & Document;
export const MemberModel = SchemaFactory.createForClass(Member);
