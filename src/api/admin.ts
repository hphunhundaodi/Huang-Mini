import request from '@/libs/request'
import type { ResponsePageableData, ResponseCommonData } from '@/libs/request'
import { getToken } from '@/libs/local-store'
import type { UserInfo } from '@/stores/modules/user'

// 登陆
export const login = (data: { email: string; password: string }) => request({ url: '/auth/login', data })
// 注册
export const signup = (data: { email: string; password: string }) => request({ url: '/auth/signup', data })
// oss
export const getOss = () => request({ url: '/oss/signature', method: "GET" })
// ossKey 多个用 , 分割
export const getOssUrl = (data: { ossKey: string }) => request({ url: '/oss/preview', data })

// 用户信息
export const getInfo = (silence = false) => request({ url: '/auth/user', auto_message_when_error: !silence })

// graphql 接口暴漏
// const graphqlQuery = {
// 	"operationName": "fetchAuthor",
// 	"query": `query fetchAuthor { author { id name } }`,
// 	"variables": {}
// };
interface graphqlQuery {
	operationName: string
	query: string
	variables: object
}
export const graphql = (data: graphqlQuery) => request({ url: '/graphql', method: 'post', data });