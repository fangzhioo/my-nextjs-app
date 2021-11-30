/**
 * @description Deletes a pet
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** Pet id to delete */
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
    method: 'DELETE',
    params,
  });
}
