import React, { ChangeEvent, FormEvent } from "react";

class CoursesPage extends React.Component<{}, CoursesPageState> {
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
    alert(this.state.course.title);
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
      </form>
    );
  }
}

export type CoursesPageState = {
  course: { title: string };
};

export default CoursesPage;
