/**
 * @description Deletes a pet
 */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

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
  return Request('/pet/{petId}', {
    method: 'DELETE',
    params,
  });
}
