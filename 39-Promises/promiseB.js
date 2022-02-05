console.log("CallBAck functions");

// this response is coming from the server

const students = [
  { name: "AWAIS", subjects: "SE" },
  { name: "WAQAR", subjects: "PYTHON" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("student has been enrollled");
      resolve();
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
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
enrollStudent(newStudent)
  .then(function () {
    getStudents();
  })
  .catch(function () {
    console.log("some error occured");
  });
// getStudents();

// function inside then is ran as - resolve
// function inside catch is ran as - reject