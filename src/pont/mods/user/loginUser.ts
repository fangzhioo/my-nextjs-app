/**
 * @description Logs user into the system
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}
export const init = '';

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/user/login', {
    method: 'GET',
    params,
  });
}
