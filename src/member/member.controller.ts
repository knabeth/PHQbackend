import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberInput } from './member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}
}
