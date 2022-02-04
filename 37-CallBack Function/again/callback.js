console.log("CallBAck functions");

// this response is coming from the server

const students = [
  { name: "AWAIS", subjects: "SE" },
  { name: "WAQAR", subjects: "PYTHON" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("student has been enrollled");
    callback();
  }, 3000);
}
function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("std").innerHTML = str;
    console.log("student has been fetched");
  }, 1000);
}

let newStudent = { name: "RAZZAQ", subjects: "IT" };
enrollStudent(newStudent, getStudents);
// getStudents();
