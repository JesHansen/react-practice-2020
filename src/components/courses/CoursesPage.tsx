import React, { FormEvent } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseactions";
import { RootState } from "../../redux/reducers";
import { AppDispatch } from "../..";
import { Course } from "../../data/course";

export type CoursesPageState = {
  course: { title: string };
};

export type CoursesPageProps = {
  createCourse: (c: Course) => void;
  courses: Course[];
};

class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    const course = { ...this.state.course, title: event.currentTarget.value };
    this.setState({ course });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };

  /* By placing the submit handler at the form level and not the button level, ENTER will also submit the form. */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((c) => (
          <div key={c.title}>{c.title}</div>
        ))}
      </form>
    );
  }
}

function mapStateToProps(state: RootState) {
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    createCourse: (c: Course) =>
      dispatch(courseActions.createCourse(c)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
