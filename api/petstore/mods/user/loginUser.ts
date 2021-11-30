/**
 * @description Logs user into the system
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

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
  return fetch({
    url: '/user/login',
    method: 'GET',
    params,
  });
}
