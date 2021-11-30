/**
 * @description Update an existing pet
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {}
export const init = undefined;

export async function request({
  params = new Params(),
  data = init,
}: {
  params: Params;
  data: defs.petstore.Pet;
}): Promise<any> {
  return fetch({
    url: '/pet',
    method: 'PUT',
    params,
    data,
  });
}
