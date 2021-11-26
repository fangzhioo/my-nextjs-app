/**
 * @description Updates a pet in the store with form data
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

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
  return Request('/pet/{petId}', {
    method: 'POST',
    params,
  });
}
