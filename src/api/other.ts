import request from '@/libs/request'
import { getOss } from '@/api/admin'

export const uploadFile = (file, onUploadProgress?) => {
	const fd = new FormData()
	fd.append('file', file)
	return request({ url: 'commonapi/Upload/uploadFile', data: fd, onUploadProgress })
}

export const uploadImage = async (file, onUploadProgress?) : Promise<string> => {
	const res = await getOss()
	const fd = new FormData()
	fd.append('key', file.name);
	fd.append('OSSAccessKeyId', res.data.signature.OSSAccessKeyId)
	fd.append('policy', res.data.signature.policy)
	fd.append('signature', res.data.signature.Signature)
	fd.append('success_action_status', '200')
	fd.append('file', file)
	return request({ url: res.data.host, data: fd, onUploadProgress, oss: true }).then((response) => file.name)
}

/** 设置模型字段 */
export const setModelField = (data: {
	/** 模型名 */
	model: string
	/** 主键ID */
	id: number | string
	/** 字段名 */
	field: string
	/** 字段值 */
	value: any
}) => request({ url: 'commonapi/Other/setModelField', data })
