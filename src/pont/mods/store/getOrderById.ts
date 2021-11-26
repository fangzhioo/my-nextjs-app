/**
      * @description Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId: number;
}
export const init = new defs.Order();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/store/order/{orderId}', {
    method: 'GET',
    params,
  });
}
