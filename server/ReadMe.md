# Server directory

服务器目录用于为您的 Nuxt 应用程序创建任何后端逻辑。它支持 HMR 和强大的功能。

该 server/ 目录包含项目的 API 端点和服务器中间件。

## API Routes

Nuxt 将自动读入`~/server/api` 目录中的任何文件 以创建 API 端点。

每个文件都应该导出一个处理 API 请求的默认函数。它可以直接（或使用 res.end()）返回一个 promise 或 JSON 数据。

### Examples

#### Hello world

server/api/hello.ts

```ts
export default (req, res) => 'Hello World';
```

查看结果： http://localhost:3000/api/hello .

#### Async function

server/api/async.ts

```ts
export default async (req, res) => {
  await someAsyncFunction();

  return {
    someData: true,
  };
};
```

#### Example: Using Node.js style

server/api/node.ts

```ts
import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.end('Works!');
};
```

## Server Middleware

Nuxt 会自动读入任何文件， `~/server/middleware` 为你的项目创建服务器中间件。

这些文件将在每个请求上运行，与映射到它们自己的路由的 API 路由不同。这通常是为了您可以为所有响应添加一个公共标头、记录响应或修改传入的请求对象以供稍后在请求链中使用。

每个文件都应该导出一个处理请求的默认函数。

```ts
export default async (req, res) => {
  req.someValue = true;
};
```

`req/res`对象没有什么不同，所以输入它们很简单。

```ts
import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
  req.someValue = true;
};
```
