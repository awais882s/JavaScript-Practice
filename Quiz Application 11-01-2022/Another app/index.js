var questionsArray = [
    {
        question: "Full form of RAM is?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Draft Access Memory",
            "Disk Access Memory",
            "None of these",
        ],
    },
    {
        question: "FULL FORM OF : C P U?",
        answer: "CENTRAL PROCESSING UNIT",
        options: [
            " CONTROL PROCESING UNIT",
            "CENTRAL PROCESSING UNIT",
            "CENTRAL PROCESS UNIT",
            "None of these",
        ],

    },
    {
        question: "SEO stands for",
        answer: " None of the above",
        options: [
            " Search Engine Optimum",
            "Search Electronic Optimization",
            "all of these",
            "None of these",
        ],

    }
];
function showQuestion(e) {
    // show questions
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML = questionsArray[e].question;
    // show options
    var optionElement = document.getElementsByClassName("optionElement");
    var length = optionElement.length;

    for (var i = 0; i < length; i++) {
        optionElement[i].innerHTML = questionsArray[e].options[i];
    }

}
var questionCount = 0;
function nextQuestion() {
    // var nextBtn = document.getElementById("nextBtn");
    questionCount++;
    showQuestion(questionCount);
}
function putActiveClass() {
    
}