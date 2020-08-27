import { CreateCourseAction } from "../actions/courseactions";
import { Actions } from '../actions/BaseAction'

export default function courseReducer(state = [], action: CreateCourseAction) {
  switch (action.type) {
    case Actions.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
