/**
 * @description Place an order for a pet
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.Order();

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: defs.Order;
}): Promise<any> {
  return Request('/store/order', {
    method: 'POST',
    params,
    data,
  });
}
