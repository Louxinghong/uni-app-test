import ajax from '@/utils/ajax'

/**
 * 获取新闻信息
 */
export const getNews = data =>
  ajax('http://jsonplaceholder.typicode.com/posts', 'get', data)
