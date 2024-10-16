import request from '@/libs/request'
import type { ResponsePageableData } from '@/libs/request'

// 活动管理列表
export interface ActiveQuery {
  // dateRange?: string[] // 时间范围 提交时转换为俩单独字段 startDate endDate
  startDate: string
  endDate: string
  number?: string
  budget?: string
  activityId: string
  pageNum: number
  pageSize: number
}
// 获取
export const getActivityList = (data: ActiveQuery) => request({ url: '/activities/list', data })
interface ActiveData {
  id?: string
  date: string
  activityId: string
  address: string
  name: string
  number: number | undefined
  budget: number | undefined
  reimbursement?: number
  detail?: string
  essay?: string
  leader: string
  userId: string
}
// 新增
export const addActivity = (data: ActiveData) => request({ url: '/activities/create', data })
// 修改
export const editActivity = (data: ActiveData) => request({ url: '/activities/update', data })
// 删除
export const deleteActivity = (data: { id: string }) => request({ url: '/activities/delete', data })
