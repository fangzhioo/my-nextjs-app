/**
      * @description Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: number;
}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/store/order/{orderId}', {
    method: 'DELETE',
    params,
  });
}
