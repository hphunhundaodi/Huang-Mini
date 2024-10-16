import request from '@/libs/request'

// 留言板列表
export interface FeedbackQuery {
  pageNum: number
  pageSize: number
}
// 获取
export const getFeedbackList = (data: FeedbackQuery) => request({ url: '/feedback/list', data })
export interface FeedbackData {
  id?: string
  content: string
  userId: string
  controlPanel?: boolean
}
// 新增
export const addFeedback = (data: FeedbackData & { id?: string }) => request({ url: '/feedback/create', data })
// 修改
// export const editActivity = (data: FeedbackData) => request({ url: '/feedback/update', data })
// 删除
export const deleteFeedback = (data: { id: string }) => request({ url: '/feedback/delete', data })
