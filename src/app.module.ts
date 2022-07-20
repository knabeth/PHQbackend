import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Member } from './member/member.model';
import { Team } from './team/team.model';
import { MemberModule } from './member/member.module';
import { TeamModule } from './team/team.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MemberModule,
    TeamModule,
    MongooseModule.forRoot(
      'mongodb+srv://zhw:4rrbT7Zhw@cluster0.rizkk69.mongodb.net/?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, Member, Team],
})
export class AppModule {}
