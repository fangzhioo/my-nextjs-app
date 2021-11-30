/**
 * @description Place an order for a pet
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {}
export const init = new defs.petstore.Order();

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: defs.petstore.Order;
}): Promise<any> {
  return fetch({
    url: '/store/order',
    method: 'POST',
    params,
    data,
  });
}
