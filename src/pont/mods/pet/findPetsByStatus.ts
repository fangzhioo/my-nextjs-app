/**
      * @description Finds Pets by status
Multiple status values can be provided with comma separated strings
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** Status values that need to be considered for filter */
  status: Array<string>;
}
export const init = [];

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return Request('/pet/findByStatus', {
    method: 'GET',
    params,
  });
}
