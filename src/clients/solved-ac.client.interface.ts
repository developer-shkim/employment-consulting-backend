export interface ISolvedAcClient {
  getUserInfo(handle: string): Promise<any>;
}
