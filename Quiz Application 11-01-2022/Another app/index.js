var questionsArray = [
    {
        Q: "Full form of RAM is?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Draft Access Memory",
            "Disk Access Memory",
            "None of these",
        ],
    },
    {
        Q: "FULL FORM OF : C P U?",
        answer: "CENTRAL PROCESSING UNIT",
        options: [
            " CONTROL PROCESING UNIT",
            "CENTRAL PROCESSING UNIT",
            "CENTRAL PROCESS UNIT",
            "None of these",
        ],

    },
    {
        Q: "SEO stands for",
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
    questionElement.innerHTML = questionsArray[e].Q;
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
function putActive(e) {
    var optionElement = document.getElementsByClassName("optionElement");
    e.classlist.add("active");
    
}