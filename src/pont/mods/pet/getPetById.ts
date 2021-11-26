/**
      * @description Find pet by ID
Returns a single pet
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** ID of pet to return */
  petId: number;
}
export const init = new defs.Pet();

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/pet/{petId}', {
    method: 'GET',
    params,
  });
}
