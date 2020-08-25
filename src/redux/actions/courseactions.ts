export const CREATE_COURSE = "CREATE_COURSE";

export type Course = {title: string};
export type CreateCourseAction = { type: typeof CREATE_COURSE; course: Course };

export function createCourse(course: Course): CreateCourseAction {
  return { type: CREATE_COURSE, course };
}
