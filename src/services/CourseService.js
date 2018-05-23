let _singleton = Symbol()
const COURSE_API_URL = 'http://localhost:8080/api/course'
// const COURSE_API_URL = 'https://stern-webdev-2018.herokuapp.com/api/course';

class CourseService {
	constructor(singletonToken) {
		if (_singleton !== singletonToken)
			throw new Error('Cannot instantiate directly.')
	}

	static get instance() {
		if (!this[_singleton])
			this[_singleton] = new CourseService(_singleton)
		return this[_singleton]
	}

	findAllCourses() {
		return fetch(COURSE_API_URL)
			.then(function (response) {
				return response.json()
			});
	}

	createCourse(course) {
		return fetch(COURSE_API_URL, {
			body: JSON.stringify(course),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		}).then(function (response) {
			return response.json()
		});
	}

	deleteCourse(courseId) {
		return fetch(COURSE_API_URL + '/' + courseId, {
			method: 'delete'
		})
			.then(function(response) {
				return response;
			})
	}
}
export default CourseService
