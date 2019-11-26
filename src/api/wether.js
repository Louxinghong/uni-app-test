import ajax from '@/utils/ajax'

/**
 * 获取天气信息
 */
export const getWether = data =>
  ajax('https://www.tianqiapi.com/api/', 'get', data)
