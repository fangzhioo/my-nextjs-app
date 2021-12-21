import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    idx: 0,
    title: '程序兼职',
    cateEn: 'Job',
    cateCn: '工作',
    chilren: [
      {
        idx: 0,
        title: 'Upwork',
        desc: '全球最专业平台：程序丨设计丨文案',
        url: 'https://www.upwork.com/',
        logo: 'http://chuangzaoshi.com/assets/images/J/upwork.png',
      },
      {
        idx: 1,
        title: 'Freelancer',
        desc: '全球最大平台：程序丨设计',
        url: 'https://www.freelancer.com/',
        logo: 'http://chuangzaoshi.com/assets/images/J/freelancer.png',
      },
      {
        idx: 2,
        title: 'Fiverr',
        desc: '国外职业众包平台',
        url: 'https://www.fiverr.com/',
        logo: 'http://chuangzaoshi.com/assets/images/J/fiverr.png',
      },
      {
        idx: 3,
        title: '码市',
        desc: '基于云技术的软件外包服务平台',
        url: 'https://mart.coding.net/',
        logo: 'http://chuangzaoshi.com/assets/images/J/coding.png',
      },
      {
        idx: 4,
        title: '程序员客栈',
        desc: '程序员的经纪人',
        url: 'https://www.proginn.com/',
        logo: 'http://chuangzaoshi.com/assets/images/J/proginn.png',
      },
      {
        idx: 5,
        title: '实现网',
        desc: '按需雇佣BAT工程师、设计师',
        url: 'http://shixian.com/',
        logo: 'http://chuangzaoshi.com/assets/images/J/shixian.png',
      },
    ],
  },
]

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.end(JSON.stringify(data))
}
