/**
      * @description Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId: number;
}
export const init = new defs.petstore.Order();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/store/order/{orderId}',
    method: 'GET',
    params,
  });
}
