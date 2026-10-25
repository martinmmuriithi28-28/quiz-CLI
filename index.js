const prompt = require("prompt-sync")({ sigint: true });

// Quiz Questions
const questions = [
  {
    question: "What is the capital city of Kenya?",
    options: ["A. Nairobi", "B. Kisumu", "C. Mombasa", "D. Nakuru"],
    answer: "A"
  },
  {
    question: "Which language runs in Node.js?",
    options: ["A. Python", "B. Java", "C. JavaScript", "D. PHP"],
    answer: "C"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["A. <!-- -->", "B. //", "C. ##", "D. **"],
    answer: "B"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["A. Microsoft", "B. Netscape", "C. Apple", "D. Google"],
    answer: "B"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["A. shift()", "B. push()", "C. pop()", "D. unshift()"],
    answer: "B"
  }
];

let score = 0;
const totalTime = 60;
const startTime = Date.now();

function startQuiz() {
  console.log("===================================");
  console.log("      WELCOME TO THE QUIZ");
  console.log("===================================");
  console.log(`You have ${totalTime} seconds.`);
  console.log("");

  questions.forEach((question, index) => {

    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    if (elapsed >= totalTime) {
      console.log("\nTime is up!");
      return;
    }

    console.log(`Question ${index + 1}`);
    console.log(question.question);

    question.options.forEach(option => {
      console.log(option);
    });

    const answer = prompt("Your Answer: ").toUpperCase();

    if (answer === question.answer) {
      console.log("Correct!\n");
      score++;
    } else {
      console.log(`Incorrect. Correct answer: ${question.answer}\n`);
    }

    console.log(`Time Remaining: ${totalTime - elapsed} seconds\n`);
  });

  endQuiz();
}

function endQuiz() {
  console.log("===========================");
  console.log("Quiz Finished");
  console.log("===========================");

  console.log(`Final Score: ${score}/${questions.length}`);

  const percentage = (score / questions.length) * 100;

  if (percentage >= 80) {
    console.log("Excellent!");
  } else if (percentage >= 50) {
    console.log("Good Job!");
  } else {
    console.log("Keep Practicing!");
  }

  console.log("");

  const answers = questions.map(question => question.answer);

  console.log("Correct Answers:");
  console.log(answers.join(", "));
}

startQuiz();