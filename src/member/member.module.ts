import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { MemberController } from './member.controller';
import { MemberSchema } from './member.entity';

@Module({
  providers: [MemberService, MemberResolver],
  controllers: [MemberController],
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
  ],
})
export class MemberModule {}
