const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.id} part={p.name} exercises={p.exercises} />
      ))}
      <Total parts={parts} />
    </div>
  );
};
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const sum = parts.reduce((s, p) => s + p.exercises, 0);

  return <p>Number of exercises {sum}</p>;
};

export default Course;
