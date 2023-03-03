export function deepClone <T>(target: T): T {
	if (typeof target !== 'object' || target == null) {
		return target
	}
	const res: any[] | Record<any, any> = Array.isArray(target) ? [] : {}
	for (let key in target) {
		// 避免遍歷到原型練
		if (target.hasOwnProperty(key)) {
			res[key] = deepClone(target[key])
		}
	}
	return res as T
}