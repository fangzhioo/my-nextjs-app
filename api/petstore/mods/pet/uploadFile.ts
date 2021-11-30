/**
 * @description uploads an image
 */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** ID of pet to update */
  petId: number;
}
export const init = new defs.petstore.ApiResponse();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/pet/{petId}/uploadImage',
    method: 'POST',
    params,
  });
}
