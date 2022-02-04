console.log("CallBack Function");
// pretend that this response is coming from the server
const students = [
  { name: "awais", subject: "JS" },
  { name: "Razzaq", subject: "SE" },
];

function enrollStudent(student) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
  }, 8000);
}
function getStudent() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student has been fethched");
  }, 1000);
}
let newStudent = { name: "waqar", subject: "python" };
enrollStudent(newStudent);
getStudent();
