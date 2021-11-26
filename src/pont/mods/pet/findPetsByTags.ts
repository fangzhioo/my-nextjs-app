/**
      * @description Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      */

import Request from 'src/utils/request';
import * as defs from '../../baseClass';

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
  return Request('/pet/findByTags', {
    method: 'GET',
    params,
  });
}
