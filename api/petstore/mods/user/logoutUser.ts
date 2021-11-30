/**
 * @description Logs out current logged in user session
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/user/logout',
    method: 'GET',
    params,
  });
}
