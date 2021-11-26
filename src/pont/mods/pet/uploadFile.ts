/**
 * @description uploads an image
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** ID of pet to update */
  petId: number;
}
export const init = new defs.ApiResponse();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/pet/{petId}/uploadImage', {
    method: 'POST',
    params,
  });
}
