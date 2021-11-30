/**
 * @description Add a new pet to the store
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
    method: 'POST',
    params,
    data,
  });
}
