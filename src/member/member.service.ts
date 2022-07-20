import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Member, MemberDocument, MemberModel } from './member.model';
import { CreateMemberInput } from './member.dto';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async create(member: CreateMemberInput): Promise<Member> {
    const memberModel = new this.memberModel(member);
    return await memberModel.save();
  }

  async findAll(): Promise<Member> {
    const res = await this.memberModel.findOne();
    console.log(res);
    return res;
  }
}
