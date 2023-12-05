export interface TokenService {
  signToken(payload: any): Promise<string>;

  verifyToken(token: string): Promise<any>;
}
