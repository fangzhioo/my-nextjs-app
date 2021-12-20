import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    "idx": 0,
    "title": "代码编辑",
    "cateEn": "Develop",
    "cateCn": "前端",
    "chilren": [
      {
        "idx": 0,
        "title": "Sublime",
        "desc": "强大漂亮的代码编辑器",
        "url": "http://www.sublimetext.com/",
        "theme": "#272822",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_sublime.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 1,
        "title": "Atom",
        "desc": "Github推出的开源代码编辑器",
        "url": "https://atom.io/",
        "theme": "#584b4f",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_atom.png",
        "platform": "microsoft,linux"
      },
      {
        "idx": 2,
        "title": "VScode",
        "desc": "微软免费跨平台代码编辑器",
        "url": "https://code.visualstudio.com/",
        "theme": "#2c2c32",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_vscode.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 3,
        "title": "Notepad++",
        "desc": "轻量级代码编辑器",
        "url": "https://notepad-plus-plus.org/",
        "theme": "#293134",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_notepad.png",
        "platform": "microsoft,linux"
      },
      {
        "idx": 4,
        "title": "Brackets",
        "desc": "adobe开源编辑器",
        "url": "http://brackets.io/",
        "theme": "#2098f5",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_brackets.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 5,
        "title": "webstorm",
        "desc": "智能强大的JavaScript编辑器",
        "url": "http://www.jetbrains.com/webstorm/",
        "theme": "#161616",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_webstorm.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 6,
        "title": "vim",
        "desc": "Linux平台高度可定制的vi文本编辑器",
        "url": "http://www.vim.org",
        "theme": "#cccc99",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_vim.png",
        "platform": "apple,microsoft,linux"
      }
    ]
  },
  {
    "idx": 1,
    "title": "数据传输",
    "cateEn": "Develop",
    "cateCn": "前端",
    "chilren": [
      {
        "idx": 0,
        "title": "Xshell",
        "desc": "一个强大的安全终端模拟软件",
        "url": "http://www.netsarang.com/xshell.html",
        "theme": "#343434",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_xshell.png",
        "platform": "microsoft"
      },
      {
        "idx": 1,
        "title": "Filezilla",
        "desc": "一个免费开源的FTP软件",
        "url": "https://filezilla-project.org/",
        "theme": "#bb0000",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_filezilla.png ",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 2,
        "title": "Xftp",
        "desc": "强大的SFTP、FTP文件传输软件",
        "url": "http://www.netsarang.com/download/down_xfp.html",
        "theme": "#343434",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_xfp.png",
        "platform": "microsoft"
      },
      {
        "idx": 3,
        "title": "Transmit",
        "desc": "一款适用于Mac必备的FTP客户端",
        "url": "https://www.panic.com/transmit/",
        "theme": "#212121",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_transmit.png",
        "platform": "apple"
      },
      {
        "idx": 4,
        "title": "iTerm2",
        "desc": "MAC终端命令行工具",
        "url": "http://www.iterm2.com/",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_iterm2.png",
        "platform": "apple"
      },
      {
        "idx": 5,
        "title": "Sequelpro",
        "desc": "Mac平台的MySQL管理工具",
        "url": "http://sequelpro.com/",
        "theme": "#9FC9E1",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_sequelpro.png",
        "platform": "apple"
      },
      {
        "idx": 6,
        "title": "Coda",
        "desc": "集成全面、轻巧优秀Mac的编辑器",
        "url": "https://panic.com/coda/",
        "theme": "#146883",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_coda.png",
        "platform": "apple,block"
      },
      {
        "idx": 7,
        "title": "Navicat",
        "desc": "一套快速、可靠的数据库管理工具",
        "url": "https://www.navicat.com/",
        "theme": "#1e1e1e",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_navicat.png ",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 8,
        "title": "Git",
        "desc": "一款免费、开源的分布式版本控制系统",
        "url": "https://git-scm.com/",
        "theme": "#413932",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_git.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 9,
        "title": "Termius",
        "desc": "支持移动端的跨平台SSH客户端",
        "url": "https://www.termius.com/",
        "theme": "#141729",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_termius.png",
        "platform": "apple,microsoft,linux,android"
      },
      {
        "idx": 10,
        "title": "Working Copy",
        "desc": "强大的苹果iOS Git客户端应用",
        "url": "https://workingcopyapp.com/",
        "theme": "#242c36",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_workingcopy.png",
        "platform": "microsoft"
      }
    ]
  },
  {
    "idx": 2,
    "title": "效率工具",
    "cateEn": "Develop",
    "cateCn": "前端",
    "chilren": [
      {
        "idx": 0,
        "title": "Avocode",
        "desc": "设计图转前端代码，设计到开发的桥梁",
        "url": "https://avocode.com/",
        "theme": "#29d100",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_avocode.png ",
        "platform": "block"
      },
      {
        "idx": 1,
        "title": "Dash",
        "desc": "编程语言API文档浏览器",
        "url": "https://kapeli.com/dash",
        "theme": "#a76bcc",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_dash.png",
        "platform": "apple"
      },
      {
        "idx": 2,
        "title": "Fiddler",
        "desc": "免费强大的HTTP调试抓包代理工具",
        "url": "http://www.telerik.com/fiddler",
        "theme": "#313338",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_fiddler.png",
        "platform": "apple,microsoft,linux,android"
      },
      {
        "idx": 3,
        "title": "Charles",
        "desc": "HTTP抓包调试利器",
        "url": "https://www.charlesproxy.com",
        "theme": "#bfdfef",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_charles.png",
        "platform": "apple,microsoft,linux"
      }
    ]
  },
  {
    "idx": 3,
    "title": "环境配置",
    "cateEn": "Develop",
    "cateCn": "前端",
    "chilren": [
      {
        "idx": 0,
        "title": "Workstation",
        "desc": "全球著名的商业虚拟机软件",
        "url": "https://www.vmware.com/",
        "theme": "#0095d3",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_workstation.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 1,
        "title": "VirtualBox",
        "desc": "著名的一款免费开源虚拟机软件",
        "url": "https://www.virtualbox.org/",
        "theme": "#678ebe",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_virtualbox.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 2,
        "title": "Firefox",
        "desc": "一款自由的，开放源码的开发者浏览器",
        "url": "https://www.mozilla.org/en-US/firefox/new/",
        "theme": "#2c1956",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_firefox.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 3,
        "title": "Chrome",
        "desc": "Google出品高效率的开发者浏览器[离线版本]",
        "url": "https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html?standalone=1",
        "theme": "#017ef3",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_chrome.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 4,
        "title": "XAMPP",
        "desc": "Apache + MariaDB + PHP + Perl最流行的PHP开发环境集成包软件",
        "url": "https://www.apachefriends.org/index.html",
        "theme": "#2a5d84",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_xampp.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 5,
        "title": "Tor Browser",
        "desc": "匿名安全的洋葱路由浏览器",
        "url": "http://www.theonionrouter.com/",
        "theme": "#7e4798",
        "logo": "http://chuangzaoshi.com/assets/images/CT/t_theonionrouter.png",
        "platform": "apple,microsoft,linux,android"
      },
      {
        "idx": 6,
        "title": "微软Edge",
        "desc": "微软基于Chromium新出的浏览器",
        "url": "https://www.microsoftedgeinsider.com/en-us/",
        "theme": "#484848",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_Edge.png",
        "platform": "apple,microsoft,android"
      }
    ]
  }
]

export default async (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }