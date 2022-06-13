<template>
  <div class="home-page">
    <!-- 热榜搜索 -->
    <section class="hot-search"></section>
    <section class="hot-container">
      <!-- 热榜列表 -->
      <div class="rank-list">
        <div class="rank-item" v-for="hot in hotList" :key="hot.id" @click="handleGo(hot)">
          <img class="hot-pic" :src="hot.pic" :alt="hot.title" srcset="" />
          <div class="hot-desc">
            <h3>{{ hot.title }}</h3>
            <p>{{ hot.excerpt }}</p>
            <div class="hot-label">
              <span class="hot-rank" v-if="hot.getsort === 0">
                <img src="/static/images/top1.svg" alt="" srcset="" />
              </span>
              <span class="hot-rank" v-else-if="hot.getsort === 1">
                <img src="/static/images/top2.svg" alt="" srcset="" />
              </span>
              <span class="hot-rank" v-else-if="hot.getsort === 2">
                <img src="/static/images/top3.svg" alt="" srcset="" />
              </span>
              <span class="hot-rank" v-else>{{ hot.getsort + 1 }}</span>
              <span class="hot-update-time">{{ beautifyTime(hot.gettime) }}</span>
              <span>{{ hot.hotvalue }}热度</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 热榜平台 -->
      <div class="res-list">
        <div
          class="res-item"
          @click="handleResChange(res)"
          :class="{ 'is-actived': res.key === currentRes }"
          v-for="res in resList"
          :key="res.key"
        >
          <img class="res-icon" :src="res.icon" alt="" srcset="" />
          <span class="res-title">{{ res.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { isString } from '@vue/shared'

/**
 * 人性化时间
 * @param {Object} timestamp 时间戳/秒数
 */
function beautifyTime(timestamp) {
  var mistiming = Math.round(Date.now() / 1000) - timestamp
  var postfix = mistiming > 0 ? '前' : '后'
  mistiming = Math.abs(mistiming)
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒']
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1]

  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm != 0) {
      return inm + arrr[i] + postfix
    }
  }
}

const transObjResToArray = (datas: object) => {
  const list: any[] = []
  try {
    Object.keys(datas).forEach((key) => {
      list.push(datas[key])
    })
  } catch (error) {
    // ...
  }
  return list
}
const route = useRoute()
const router = useRouter()

const currentRes = ref(route.query.res || '')
const hotList = ref<Array<any>>([])
const resList = ref<Array<any>>([])

/**
 * 
  excerpt: "唐山3天3份实名举报 继6月10日河北唐山蛋糕店老板实名举报涉黑团伙敲诈勒索、暴力打砸后，6月11日、12日分别有女子实名举报遭逼迫下跪打“白条”，多人实名举报唐山女子徐某诈骗。三天三份举报均涉及唐山路北区。 唐山3天3份实名举报"
  getsort: 0
  gettime: 1655088170
  hotvalue: "41620000"
  id: 71407
  pic: "https://pic1.zhimg.com/80/v2-6fbce4bf69f66a3a570c6d328e4f5451_720w.png"
  source: "zhihu"
  title: "唐山 3 天出现 3 份实名举报，均涉路北区，这个区域治安如何？为何会频发此类事件？"
  url: "https://www.zhihu.com/question/537331783"
 */
const getHotListByRes = async () => {
  if (!currentRes.value) {
    return
  }
  const { data } = await useFetch('https://www.suredian.com/res/get', {
    method: 'post',
    responseType: 'json',
    body: {
      res: currentRes.value,
    },
  })
  hotList.value = (toRaw(data.value) as Array<any>) || []
  if (isString(hotList.value)) {
    try {
      hotList.value = JSON.parse(hotList.value)
    } catch (error) {
      // error
    }
  }
}

/**
 * 
    icon: "/static/images/res/zhihu.svg"
    key: "zhihu"
    link: "https://www.zhihu.com"
    name: "知乎热榜"
    searchend: "&type=content"
    searchstart: "https://www.zhihu.com/search?q="
    searchtext: "在 知乎 搜索"
    updateTime: 30
 */
const { data } = await useFetch('https://www.suredian.com/res/getsource', {
  method: 'post',
  responseType: 'json',
})

if (data.value) {
  resList.value = transObjResToArray(toRaw(data.value) || {})
  if (!resList.value.find((i) => i.key === currentRes.value)) {
    currentRes.value = resList.value?.[0]?.key || ''
  }
  await getHotListByRes()
}

// change res
const handleResChange = (res) => {
  currentRes.value = res.key
  router.replace({
    query: {
      res: res.key,
    },
  })
  getHotListByRes()
}

const handleGo = (hot) => {
  if (hot.url) {
    window.open(hot.url, '_blank')
  }
}
</script>

<style lang="scss">
@import 'assets/style/variables.scss';
.home-page {
  width: 100%;
  max-width: 100%;
}
.hot-container {
  display: flex;
  position: relative;
  max-width: 100%;

  .rank-list {
    flex: 1;
    box-sizing: border-box;
    padding: 20px;

    .rank-item {
      cursor: pointer;
      max-width: 100%;
      display: flex;
      margin-bottom: 20px;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 4%);

      &:hover {
        box-shadow: 0 10px 10px 0 rgb(133 111 254 / 10%);
      }

      .hot-pic {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-right: 20px;
        border-radius: 4px;
        overflow: hidden;
      }

      .hot-desc {
        flex: 1;
        width: 0;
        & > h3 {
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        & > p {
          color: #333;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: -o-ellipsis-lastline;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .hot-label {
          display: flex;
          align-items: center;
          color: #666;
          font-size: 12px;
          .hot-rank {
            font-size: 14px;
            font-weight: 500;
            & > img {
              width: 20px;
              height: 20px;
            }
          }
          .hot-update-time {
            margin: 0 12px;
          }
        }
      }
    }
  }

  .res-list {
    padding: 10px 0 10px 16px;
    width: 160px;
    min-width: 160px;
    max-width: 180px;
    display: none;
    box-sizing: border-box;
    @include media-to(sm) {
      display: block;
    }

    .res-item {
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;
      padding-left: 14px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 4%);

      &:hover {
        box-shadow: 0 10px 10px 0 rgb(133 111 254 / 10%);
      }

      &.is-actived::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        background-color: var(--theme, #fb6c28);
      }

      .res-icon {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 12px;
        object-fit: contain;
      }
    }
  }
}
</style>
