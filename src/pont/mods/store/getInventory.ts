/**
      * @description Returns pet inventories by status
Returns a map of status codes to quantities
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
  return Request('/store/inventory', {
    method: 'GET',
    params,
  });
}
