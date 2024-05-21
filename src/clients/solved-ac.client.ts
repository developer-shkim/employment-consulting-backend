import got from 'got';
import { ISolvedAcClient } from './solved-ac.client.interface';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';

type UserInfo = {
  handle: string;
  tier: number;
  rating: number;
};

@Injectable()
export class SolvedAcClient implements ISolvedAcClient {
  async getUserInfo(handle: string): Promise<any> {
    const url = `${process.env.SOLVED_AC_API_URL}/v3/user/show?handle=${handle}`;

    const options = {
      headers: {
        Accept: 'application/json',
        'x-solvedac-language': 'ko',
      },
    };

    const userInfo = await got.get(url, options).json<UserInfo>();

    const dto = new UserDto({
      handle: userInfo.handle,
      tier: userInfo.tier,
      rating: userInfo.rating,
    });

    return dto;
  }
}
