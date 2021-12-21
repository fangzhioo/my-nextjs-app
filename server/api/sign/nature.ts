import type { IncomingMessage, ServerResponse } from 'http';

export const data = [
  {
    idx: 0,
    title: '艺术文化',
    cateEn: 'Node',
    cateCn: '节点',
    chilren: [
      {
        idx: 0,
        title: 'Google博物馆',
        desc: 'Google全球首家虚拟博物馆 [需代理]',
        url: 'https://artsandculture.google.com/',
        logo: 'http://chuangzaoshi.com/assets/images/N/artsandculture.png',
      },
      {
        idx: 1,
        title: 'BoredPanda',
        desc: '创意博客杂志网',
        url: 'https://www.boredpanda.com/',
        logo: 'http://chuangzaoshi.com/assets/images/N/boredpanda.png',
      },
      {
        idx: 2,
        title: 'Gallerix',
        desc: '在线博物绘画艺术图库',
        url: 'https://gallerix.asia/',
        logo: 'http://chuangzaoshi.com/assets/images/N/gallerix.png',
      },
    ],
  },
  {
    idx: 1,
    title: '自然地理',
    cateEn: 'Node',
    cateCn: '节点',
    chilren: [
      {
        idx: 0,
        title: '美国国家地理',
        desc: '关于自然的美国国家地理频道',
        url: 'http://www.nationalgeographic.com/',
        logo: 'http://chuangzaoshi.com/assets/images/N/nationalgeographic.png',
      },
      {
        idx: 1,
        title: 'NASA',
        desc: '美国国家航空航天局',
        url: 'https://www.nasa.gov/',
        logo: 'http://chuangzaoshi.com/assets/images/N/nasa.png',
      },
      {
        idx: 2,
        title: 'BBC自然',
        desc: 'BBC自然地理动物栏目',
        url: 'https://www.bbc.co.uk/programmes/p013mrl5',
        logo: 'http://chuangzaoshi.com/assets/images/N/bbc.png',
      },
      {
        idx: 3,
        title: '国家地理中文网',
        desc: '《华夏地理》与美国国家地理合作出版',
        url: 'http://www.ngchina.com.cn/',
        logo: 'http://chuangzaoshi.com/assets/images/N/artsandculture.png',
      },
    ],
  },
  {
    idx: 2,
    title: '地理工具',
    cateEn: 'Node',
    cateCn: '节点',
    chilren: [
      {
        idx: 0,
        title: 'Google地球',
        desc: 'Google的卫星渲染地图 [需代理]',
        url: 'https://www.google.com/earth/',
        logo: 'http://chuangzaoshi.com/assets/images/N/google-earth.png',
      },
    ],
  },
];

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
};
