/**
 * @description Update an existing pet
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
  data: defs.Pet;
}): Promise<any> {
  return Request('/pet', {
    method: 'PUT',
    params,
    data,
  });
}
