const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module'
const ALT_MODULE_API_URL = 'http://localhost:8080/api/module'

let _singleton = Symbol()

class ModuleService {
	constructor(singletonToken) {
		if (_singleton !== singletonToken)
			throw new Error('Cannot instantiate directly.')
	}

	static get instance() {
		if (!this[_singleton])
			this[_singleton] = new ModuleService(_singleton)
		return this[_singleton]
	}

	findAllModulesForCourse(courseId) {
		return fetch(MODULE_API_URL.replace('CID', courseId))
			.then(function (response) {
				return response.json()
			})
	}

	findAllModules() {
		return fetch(ALT_MODULE_API_URL)
			.then(function (response) {
				return response.json()
			})
	}

	findModuleById(moduleId) {
		return fetch(ALT_MODULE_API_URL + '/' + moduleId)
			.then(function (response) {
				return response.json()
			})
	}

	createModule(courseId, module) {
		return fetch(MODULE_API_URL.replace('CID', courseId),
			{
				body: JSON.stringify(module),
				headers: { 'content-type': 'application/json' },
				method: 'POST'
			})
			.then(function (response) {
				return response.json()
			})
	}

	updateModule(module) {
		return fetch(ALT_MODULE_API_URL + module.moduleId, {
			body: JSON.stringify(module),
			headers: {'content-type': 'application/json'},
			method: 'PUT'
		})
			.then(function (response) {
				return response.json()
			})
	}

	deleteModule(moduleId) {
		return fetch(ALT_MODULE_API_URL + moduleId, {
			method: 'DELETE'
		})
			.then(function (response) {
				return response
			})
	}
}

export default ModuleService