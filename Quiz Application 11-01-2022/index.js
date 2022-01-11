function check() {
  var score = 0;
  const right_answer_1 = document.getElementById("q1-a1");
  const q1_answer_2 = document.getElementById("q1-a2");
  const q1_answer_3 = document.getElementById("q1-a3");
  const q1_answer_4 = document.getElementById("q4-a4");
  if (right_answer_1.checked == true) {
    score++;
    alert("Q1 answer is True");
  } else {
    alert("Q1 answer is False");
  }

  const right_answer_2 = document.getElementById("q2-a1");
  const q2_answer_2 = document.getElementById("q2-a2");
  const q2_answer_3 = document.getElementById("q2-a3");
  const q2_answer_4 = document.getElementById("q2-a4");
  if (right_answer_2.checked == true) {
    score++;
    alert("Q2 answer is True");
  } else {
    alert("Q2 answer is False");
  }
  const right_answer_3 = document.getElementById("q3-a2");
  const q3_answer_2 = document.getElementById("q3-a2");
  const q3_answer_3 = document.getElementById("q3-a1");
  const q3_answer_4 = document.getElementById("q3-a4");
  if (right_answer_3.checked == true) {
    score++;
    alert("Q3 answer is True");
  } else {
    alert("Q3 answer is False");
  }
  alert("Your Score is " + score++);
}
