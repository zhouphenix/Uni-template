import request from '@/api/config.js'

export function get() {
	return request.get('https://api.apiopen.top/getSingleJoke?sid=28654780', {
			param1: 'p1',
			param2: 'p2'
		}

	)
}
