/**
 * @description Logs out current logged in user session
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/user/logout', {
    method: 'GET',
    params,
  });
}
