/**
      * @description Delete user
This can only be done by the logged in user.
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** The name that needs to be deleted */
  username: string;
}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/user/{username}',
    method: 'DELETE',
    params,
  });
}
