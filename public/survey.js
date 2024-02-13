"use strict";

const autoData = [
  {
    id: 1,
    question: "Select Vehicle Year",
    options: [
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2023",
      "2022",
      "2021",
      "2020",
      "2023",
      "2022",
      "2021",
      "2020",
      "2023",
      "2022",
      "2021",
      "2020",
    ],
    progress: 33,
  },
  {
    id: 2,
    question: "Select Vehicle Make",
    options: ["Hona", "Maruti", "BMW", "Tata", "Toyota"],
    progress: 47,
  },
  {
    id: 3,
    question: "Select Vehicle Model",
    options: ["3500", "4400", "BOLT EV", "CAMARO", "TRAVERSE"],
    progress: 56,
  },
  {
    id: 4,
    question: "Select Second Vehicle",
    options: ["2024", "2023", "2022", "2021", "2020"],
    progress: 62,
  },
  {
    id: 5,
    question: "Are You Currently Insured?",
    options: ["Yes", "No"],
    progress: 77,
  },
  {
    id: 6,
    question: "Which Company are you insured With?",
    options: ["Ensurance", "Farmers", "Mercury"],
    progress: 86,
  },
  {
    id: 7,
    question: "Do you have driving License?",
    options: ["Ensurance", "Farmers", "Mercury"],
    progress: 98,
  },
  {
    id: 8,
    question: "Which will be your next car?",
    options: ["Ensurance", "Farmers", "Mercury"],
    progress: 100,
  },
];

const optionContainer = document.querySelector(".options");
const questionLabel = document.querySelector(".ques");
const progressBar = document.querySelector(".progress-inner");
const progressPercent = document.querySelector(".progress-percent");

let quesNo = 0;
let maxQuesNum = autoData.length - 1;

renderHtml(autoData, 0);

function renderHtml(data, quesNo) {
  if (quesNo >= maxQuesNum) quesNo = 0;

  let html = "";
  questionLabel.textContent = data[quesNo].question;
  data[quesNo].options.forEach((item) => {
    html += `
        <button class="option">${item}</button>
        `;
  });

  optionContainer.innerHTML = html;
  progressBar.style.width = `${data[quesNo].progress}%`;
  progressPercent.textContent = `${data[quesNo].progress}% Complete`;
  const currentURL = new URL(location.href);
  currentURL.searchParams.set("q", quesNo + 1);
  history.pushState(null, "", currentURL);

  const optionLabel = document.querySelectorAll(".option");
  optionLabel.forEach((label) => {
    label.addEventListener("click", function (e) {
      quesNo += 1;
      renderHtml(autoData, quesNo);
    });
  });
}
