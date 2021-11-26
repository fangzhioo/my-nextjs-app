/**
 * @description Get user by user name
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}
export const init = new defs.User();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/user/{username}', {
    method: 'GET',
    params,
  });
}
