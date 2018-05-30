const LESSON_API_URL = 'http://localhost:8080/api/lesson'
const ALT_LESSON_API_URL = 'http://localhost8080:/api/course/CID/module/MID/lesson'

let _singleton = Symbol()

class LessonService {
	constructor(singletonToken) {
		if (_singleton !== singletonToken)
			throw new Error('Cannot instantiate directly.')
	}

	static get instance() {
		if (!this[_singleton])
			this[_singleton] = new LessonService(_singleton)
		return this[_singleton]
	}

	findAllLessons() {
		return fetch(LESSON_API_URL)
			.then(function (response) {
				return response.json()
			})
	}

	findAllLessonsForModule(moduleId, courseId) {
		return fetch(ALT_LESSON_API_URL
			.replace('CID', courseId)
			.replace('MID', moduleId))
			.then(function (response) {
				return response.json()
			})
	}

	findLessonById(lessonId) {
		return fetch(LESSON_API_URL + '/' + lessonId)
			.then(function (response) {
				return response.json()
			})
	}

	createLesson(moduleId, courseId, lesson) {
		return fetch(ALT_LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
			{
				body: JSON.stringify(lesson),
				headers: {'content-type': 'application/json'},
				method: 'POST'
			})
			.then(function (response) {
				return response.json()
			})
	}

	deleteLesson(lessonId) {
		return fetch(LESSON_API_URL + '/' + lessonId, {
			method: 'delete'
		})
	}
}

export default LessonService