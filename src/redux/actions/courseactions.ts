import { BaseAction, Actions } from "./BaseAction";
import { Course } from "../../data/course";

export type CreateCourseAction = BaseAction & { course: Course };

export function createCourse(course: Course): CreateCourseAction {
  return { type: Actions.CREATE_COURSE, course };
}
