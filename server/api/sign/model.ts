import type { IncomingMessage, ServerResponse } from 'http';

export const data = [
  {
    idx: 0,
    title: '3D模型',
    cateEn: 'Model',
    cateCn: '模型',
    chilren: [
      {
        idx: 0,
        title: 'Remix 3D',
        desc: '微软官方简单的3D模型社区',
        url: 'https://www.remix3d.com/',
        logo: 'http://chuangzaoshi.com/assets/images/D/remix3d.png',
      },
      {
        idx: 1,
        title: 'Sketchfab',
        desc: '全球最极致3D设计模型在线展示平台',
        url: 'https://sketchfab.com/',
        logo: 'http://chuangzaoshi.com/assets/images/D/sketchfab.png',
      },
      {
        idx: 2,
        title: 'Thingiverse',
        desc: '3D资源下载站',
        url: 'https://www.thingiverse.com/',
        logo: 'http://chuangzaoshi.com/assets/images/G/thingiverse.png',
      },
    ],
  },
];

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
};
