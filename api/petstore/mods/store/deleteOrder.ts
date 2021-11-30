/**
      * @description Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

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
  return fetch({
    url: '/store/order/{orderId}',
    method: 'DELETE',
    params,
  });
}
