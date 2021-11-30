/**
      * @description Finds Pets by status
Multiple status values can be provided with comma separated strings
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

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
  return fetch({
    url: '/pet/findByStatus',
    method: 'GET',
    params,
  });
}
