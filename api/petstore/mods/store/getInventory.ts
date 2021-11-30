/**
      * @description Returns pet inventories by status
Returns a map of status codes to quantities
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/store/inventory',
    method: 'GET',
    params,
  });
}
