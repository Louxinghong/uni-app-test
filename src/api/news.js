import ajax from '@/utils/ajax'

/**
 * 获取新闻信息
 */
export const getNews = data =>
  ajax('http://jsonplaceholder.typicode.com/posts', 'get', data)

export const getHupuNews = data =>
  ajax('http://route.showapi.com/967-1', 'get', data)

export const getTeamInfo = data =>
  ajax('http://localhost:8081/static/teaminformation.json', 'get', data)

export const getDcloudNews = data =>
  ajax('https://unidemo.dcloud.net.cn/api/news', 'get', data)
