/**
 * @description Updates a pet in the store with form data
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** ID of pet that needs to be updated */
  petId: number;
}
export const init = undefined;

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/pet/{petId}',
    method: 'POST',
    params,
  });
}
