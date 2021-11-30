/**
      * @description Find pet by ID
Returns a single pet
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** ID of pet to return */
  petId: number;
}
export const init = new defs.petstore.Pet();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/pet/{petId}',
    method: 'GET',
    params,
  });
}
