/**
      * @description Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      */

import { fetch } from '~/libs/fetch';
import { defs } from '~/api';

export class Params {
  /** Tags to filter by */
  tags: Array<string>;
}
export const init = [];

export async function request({
  params = new Params(),
}: {
  params: Params;
}): Promise<any> {
  return fetch({
    url: '/pet/findByTags',
    method: 'GET',
    params,
  });
}
