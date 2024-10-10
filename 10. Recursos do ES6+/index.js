const students = [
  { name: "James", score: 8.5 },
  { name: "Mary", score: 9.0 },
  { name: "John", score: 7.5 },
  { name: "Patricia", score: 8.2 },
  { name: "Robert", score: 6.9 },
  { name: "Jennifer", score: 9.3 },
  { name: "Michael", score: 7.8 },
  { name: "Linda", score: 8.0 },
  { name: "William", score: 7.4 },
  { name: "Elizabeth", score: 8.8 },
  { name: "David", score: 9.1 },
  { name: "Barbara", score: 6.5 },
  { name: "Richard", score: 7.2 },
  { name: "Susan", score: 8.9 },
  { name: "Joseph", score: 7.7 },
];

const approved = students.filter((student) => student.score >= 8);
