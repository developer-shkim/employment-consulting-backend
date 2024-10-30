import { Inject, Injectable } from '@nestjs/common';
import { ISolvedAcClient } from '@clients/solved-ac.client.interface';
import { SOLVED_AC_CLIENT } from '../../symbols/di-tokens';
import { UserDto } from '@clients/dtos/user.dto';

@Injectable()
export class GetProblemSolvingCompetencyService {
  constructor(
    @Inject(SOLVED_AC_CLIENT) private readonly solvedAcClient: ISolvedAcClient,
  ) {}

  async execute(userId: string): Promise<UserDto> {
    // TODO: userId 로 사용자 조회해서 handler 을 가져온다.
    return await this.solvedAcClient.getUserInfo('xiaowuc1');
  }
}
