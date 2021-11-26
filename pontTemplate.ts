import { CodeGenerator, Interface } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const hasGetParams = !!inter.parameters.filter((param) => param.in !== 'body').length;
    const requestParams = bodyParamsCode
      ? `{ ${hasGetParams ? 'params, ' : ''}data }:{ params${
          hasGetParams ? '' : '?'
        }: Params, data: ${bodyParamsCode} }`
      : `{ ${hasGetParams ? 'params' : ''} }:{ params${hasGetParams ? '' : '?'}: Params }`;

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

      export function request(${requestParams}): Promise<Response>;

      `;
  }

  getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();
    const requestParams = bodyParamsCode
      ? `{params = new Params(),data = init}:{params: Params,data: ${bodyParamsCode}}`
      : `{params = new Params()}:{params: Params}`;

    return `
      /**
      * @description ${inter.description}
      */

    import Request from 'src/utils/request';
    import * as defs from '../../baseClass';

    export ${paramsCode};

    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}): Promise<any> {
      return Request('${inter.path}',{
        method: '${method}',
        params,
        ${bodyParamsCode ? 'data,' : ''}
      });
    }

   `;
  }
}
