/**
 * @description Creates list of users with given input array
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: Array<defs.petstore.User>;
}): Promise<any> {
  return fetch({
    url: '/user/createWithArray',
    method: 'POST',
    params,
    data,
  });
}
