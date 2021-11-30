/**
 * @description Get user by user name
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}
export const init = new defs.petstore.User();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/user/{username}',
    method: 'GET',
    params,
  });
}
