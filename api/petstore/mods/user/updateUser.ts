/**
      * @description Updated user
This can only be done by the logged in user.
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** name that need to be updated */
  username: string;
}
export const init = undefined;

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: defs.petstore.User;
}): Promise<any> {
  return fetch({
    url: '/user/{username}',
    method: 'PUT',
    params,
    data,
  });
}
