import ajax from '@/utils/ajax'

/**
 * 获取歌曲信息
 */
export const getMusic = () => ajax('/data/music.json', 'get')
