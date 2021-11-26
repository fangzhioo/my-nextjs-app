/**
      * @description Updated user
This can only be done by the logged in user.
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

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
  data: defs.User;
}): Promise<any> {
  return Request('/user/{username}', {
    method: 'PUT',
    params,
    data,
  });
}