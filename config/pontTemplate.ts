import { CodeGenerator, Interface, Surrounding } from 'pont-engine';
import * as pont from 'pont-engine';

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
    // const requestParams = inter.getRequestParams(Surrounding.typeScript);
    const method = inter.method.toUpperCase();
    const requestParams = bodyParamsCode
      ? `{ params = new Params(),data = init }: { params: Params, data: ${bodyParamsCode}}`
      : `{ params = new Params() }: { params: Params }`;

    return `
      /**
      * @description ${inter.description}
      */

    import { fetch } from '~/libs/fetch';
    import { defs } from '~/api';

    export ${paramsCode};

    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}): Promise<any> {
      return fetch({
        url: '${inter.path}',
        method: '${method}',
        params,
        ${bodyParamsCode ? 'data,' : ''}
      });
    }

   `;
  }
}

export class FileStructures extends pont.FileStructures { 
  getDataSourcesTs() {
    const dsNames = (this as any).generators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
        })
        .join('\n')}
      export const defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      export const API = {
        ${dsNames.join(',\n')}
      };
      const pont = { defs, API };

      export default pont;
      
    `;
  }

  
}
