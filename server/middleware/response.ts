import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
};
