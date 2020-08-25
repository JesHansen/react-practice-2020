import { CreateCourseAction, CREATE_COURSE } from "../actions/courseactions";

export default function courseReducer(state = [], action: CreateCourseAction) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
