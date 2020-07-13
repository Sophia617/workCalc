const myForm = document.getElementById("myForm");
const TOTALCPS = document.getElementById("totalCPS");
const COMPLETEDCPS = document.getElementById("CompletedCPS");
const SUBJECTFEES = document.getElementById("SubjectFees");
const SUBJECTCPS = document.getElementById("SubjectCPS");
const printEndDate = document.getElementById("printEndDate");
const printTotalFees = document.getElementById("printTotalFees");
const printRemainigPoints = document.getElementById("printRemainigPoints");
let totalCPS;
let completedCPS;
let remainingCPS;
let remainingSession;
let lastSession;
let subjectFees;
let subjectCPS;
let totalTuitionFees;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  initialseValue();
  printValue();
});

function initialseValue() {
  totalCPS = parseInt(TOTALCPS.value);
  completedCPS = parseInt(COMPLETEDCPS.value);
  subjectFees = parseFloat(SUBJECTFEES.value);
  subjectCPS = parseInt(SUBJECTCPS.value);
  remainingCPS = totalCPS - completedCPS;
  remainingSession = (remainingCPS / 24).toFixed(1);
  lastSession = calcLastSession(remainingSession);
  totalTuitionFees = (subjectFees / subjectCPS) * remainingCPS;

  console.log(totalCPS);
  console.log(completedCPS);
  console.log(subjectFees);
  console.log(subjectCPS);
  console.log(remainingCPS);
  console.log(remainingSession);
  console.log(lastSession);
}

function printValue() {
  printEndDate.innerHTML = lastSession;
  printTotalFees.innerHTML = totalTuitionFees;
  printRemainigPoints.innerHTML = remainingCPS;
}

function calcLastSession(remainingSession) {
  if (remainingSession <= 1) {
    return "Spring 2020";
  }
  if (1 < remainingSession &&  remainingSession <= 2) {
    return "Autumn 2021";
  }
  if (2 < remainingSession && remainingSession <= 3) {
    return "Spring 2021";
  }
  if (3 < remainingSession && remainingSession <= 4) {
    return "Autumn 2022";
  }
  if (4 < remainingSession && remainingSession <= 5) {
    return "Spring 2022";
  }
  if (5 < remainingSession && remainingSession <= 6) {
    return "Autumn 2023";
  }
  if (6 < remainingSession && remainingSession <= 7) {
    return "Spring 2023";
  }
  if (7 < remainingSession && remainingSession <= 8) {
    return "Autumn 2024";
  }
  if (8 < remainingSession && remainingSession <= 9) {
    return "Spring 2024";
  }
}
