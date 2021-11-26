/**
      * @description Delete user
This can only be done by the logged in user.
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

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
  return Request('/user/{username}', {
    method: 'DELETE',
    params,
  });
}
