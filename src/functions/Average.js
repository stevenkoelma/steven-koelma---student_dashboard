import data from "../data";

const DatalistWithLabels = data.map((avg) => ({
  assignment: avg.assignment,
  difficulty: avg.difficulty,
  enjoyment: avg.enjoyment,
}));

const assignments = [
  ...new Set(
    DatalistWithLabels.map((item) => {
      return item.assignment;
    })
  ),
];

export const getAveragesDifficulty = assignments.map((assignment) => {
  // group the assignments by the assignment name
  const assignmentsByCourse = DatalistWithLabels.filter(
    (item) => item.assignment === assignment
  );

  // get the grades per course
  const courseGrades = assignmentsByCourse.map((value) => {
    return value.difficulty;
  });

  // calculate the total per course
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  // return object with the average grade and the assignment name
  return {
    assignment: assignment,
    average: courseGrades.reduce(reducer) / courseGrades.length,
  };
});

export const getAveragesEnjoyment = assignments.map((assignment) => {
  // group the assignments by the assignment name
  const assignmentsByCourse = DatalistWithLabels.filter(
    (item) => item.assignment === assignment
  );
  // get the grades per course
  console.log("one log per assignment ");
  const courseGrades = assignmentsByCourse.map((value) => {
    return value.enjoyment;
  });
  // calculate the total per course
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // return object with the average grade and the assignment name
  return {
    assignment: assignment,
    average: courseGrades.reduce(reducer) / courseGrades.length,
  };
});
