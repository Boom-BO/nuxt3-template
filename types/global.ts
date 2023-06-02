declare global {
	type NormalObject = {
		[key: string]: any
	}

	type ControllerRouter = {
		url: string
		method: string
		handler: Function
		name?: string
		middleware?: any
		constructor?: Function | any
		instance?: any
	}

	type ParamsMeta = {
		name: string
		index: number
		fn: Function
	}

	type I18N = {
		/**
		 * 中文名
		 */
		cn: string
		/**
		 * 英文名
		 */
		en?: null | string
		/**
		 * 日文名
		 */
		// jp?: null | string
	}

	type Staff = {
		/**
		 * 评委id列表
		 */
		judges?: number[] | null
		/**
		 * 主办人用户id
		 */
		organizer?: null | number
		/**
		 * 翻译人员
		 */
		translator?: number[] | null
		/**
		 * 其他贡献者
		 */
		others?: number[] | null
	}
	type ResResult<T> = {
		code: number
		msg: string
		data: T
	}

	type PageResult<T> = {
		result: T[]
		total: number
		page: number
	}
	interface PageParams {
		page?: number | null
		pageSize?: number | null
		id?: number | null // 搜索id
		/** 搜索关键词 */
		keyword?: string | null
		createTime?: Date | number | string | null
		/** 相关字段 */
		sortRule?: string | null
		/** 不填默认正序 */
		orderRule?: '' | 'reverse' | null
	}
}
export {}
