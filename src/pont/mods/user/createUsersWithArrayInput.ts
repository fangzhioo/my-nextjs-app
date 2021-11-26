/**
 * @description Creates list of users with given input array
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: Array<defs.User>;
}): Promise<any> {
  return Request('/user/createWithArray', {
    method: 'POST',
    params,
    data,
  });
}
