// ---------------- NAVIGATION ----------------

function showSection(id) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}


// ---------------- DARK MODE ----------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// ---------------- SUBJECTS ----------------

let subjects = [];

function addSubject() {

  const input = document.getElementById("subjectInput");
  const subject = input.value.trim();

  if (!subject) {
    alert("Please enter a subject!");
    return;
  }

  subjects.push(subject);

  input.value = "";

  renderSubjects();
}

function renderSubjects() {

  const list = document.getElementById("subjectList");

  list.innerHTML = "";

  subjects.forEach((subject,index) => {

    const item = document.createElement("div");

    item.className = "subject-item";

    item.innerHTML =
      `📘 <strong>${subject}</strong>
       <p>Ready to learn! 🌟</p>`;

    list.appendChild(item);
  });

  document.getElementById("subjectCount").textContent =
    subjects.length;
}


// ---------------- TIMETABLE ----------------

function addTimetable() {

  const time =
    document.getElementById("studyTime").value;

  const subject =
    document.getElementById("studySubject").value;

  if (!time || !subject) {
    alert("Enter time and subject.");
    return;
  }

  const div = document.createElement("div");

  div.className = "list-item";

  div.innerHTML =
    `⏰ <strong>${time}</strong> — 📚 ${subject}`;

  document
    .getElementById("timetableList")
    .appendChild(div);
}


// ---------------- ASSIGNMENTS ----------------

let assignmentTotal = 0;

function addAssignment() {

  const name =
    document.getElementById("assignmentName").value;

  const date =
    document.getElementById("assignmentDate").value;

  if (!name || !date) {
    alert("Please enter assignment details.");
    return;
  }

  const div = document.createElement("div");

  div.className = "list-item";

  div.innerHTML =
    `📝 <strong>${name}</strong>
     <br>📅 Deadline: ${date}
     <br>
     <button onclick="this.parentElement.remove()">
       ✅ Complete
     </button>`;

  document
    .getElementById("assignmentList")
    .appendChild(div);

  assignmentTotal++;

  document.getElementById("assignmentCount")
    .textContent = assignmentTotal;
}


// ---------------- EXAM COUNTDOWN ----------------

function examCountdown() {

  const exam =
    document.getElementById("examName").value;

  const selectedDate =
    document.getElementById("examDate").value;

  if (!exam || !selectedDate) {
    alert("Enter exam and date.");
    return;
  }

  const examDate = new Date(selectedDate);
  const today = new Date();

  const difference =
    examDate - today;

  const days =
    Math.ceil(difference / (1000 * 60 * 60 * 24));

  const result =
    document.getElementById("examResult");

  if (days >= 0) {

    result.innerHTML =
      `🎓 <strong>${exam}</strong>
       <br>
       ⏳ ${days} days remaining!
       <br>
       🌟 Start preparing today!`;

  } else {

    result.innerHTML =
      "This exam date has already passed.";
  }
}


// ---------------- POMODORO ----------------

let timeLeft = 25 * 60;

let timerInterval = null;

function updateTimerDisplay() {

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

function startTimer() {

  if (timerInterval) return;

  timerInterval = setInterval(() => {

    if (timeLeft > 0) {

      timeLeft--;

      updateTimerDisplay();

    } else {

      clearInterval(timerInterval);

      timerInterval = null;

      alert(
        "🎉 Amazing work! Focus session completed!"
      );
    }

  },1000);
}

function pauseTimer() {

  clearInterval(timerInterval);

  timerInterval = null;
}

function resetTimer() {

  pauseTimer();

  timeLeft = 25 * 60;

  updateTimerDisplay();
}


// ---------------- ATTENDANCE ----------------

function calculateAttendance() {

  const total =
    Number(document.getElementById("totalClasses").value);

  const attended =
    Number(document.getElementById("attendedClasses").value);

  if (
    total <= 0 ||
    attended < 0 ||
    attended > total
  ) {

    document.getElementById("attendanceResult")
      .textContent = "Please enter valid values.";

    return;
  }

  const percentage =
    (attended / total) * 100;

  let message = "";

  if (percentage >= 75) {

    message = "🌟 Excellent! Keep it up!";

  } else {

    message = "📚 Try to attend more classes.";
  }

  document.getElementById("attendanceResult")
    .innerHTML =
    `Attendance: ${percentage.toFixed(2)}%
     <br>${message}`;
}


// ---------------- CGPA ----------------

function calculateCGPA() {

  const value =
    document.getElementById("gpaValues").value;

  const numbers =
    value
    .split(",")
    .map(Number)
    .filter(n => !isNaN(n));

  if (numbers.length === 0) {

    document.getElementById("cgpaResult")
      .textContent =
      "Enter valid GPA values.";

    return;
  }

  const total =
    numbers.reduce((a,b) => a + b,0);

  const cgpa =
    total / numbers.length;

  document.getElementById("cgpaResult")
    .innerHTML =
    `🏆 Your CGPA is
     <strong>${cgpa.toFixed(2)}</strong>`;
}


// ---------------- GOALS ----------------

let goalTotal = 0;

function addGoal() {

  const input =
    document.getElementById("goalInput");

  const goal =
    input.value.trim();

  if (!goal) return;

  const div =
    document.createElement("div");

  div.className = "list-item";

  div.innerHTML =
    `🎯 ${goal}
     <br>
     <button onclick="completeGoal(this)">
       ⭐ Complete
     </button>`;

  document.getElementById("goalList")
    .appendChild(div);

  goalTotal++;

  document.getElementById("goalCount")
    .textContent = goalTotal;

  input.value = "";
}

function completeGoal(button) {

  button.parentElement.innerHTML +=
    "<br>🏆 Goal Achieved!";

  button.remove();
}


// ---------------- MOTIVATIONAL QUOTES ----------------

const quotes = [

  "Believe you can, and you are halfway there! 🌟",

  "Every expert was once a beginner. 🚀",

  "Small progress every day creates big results. 🌈",

  "Your future begins with what you learn today. 📚",

  "Mistakes mean you are learning something new! 💡",

  "Dream big, study smart and never give up! 🏆",

  "You are capable of amazing things! ⭐",

  "Learning is your superpower! 🦸",

  "One chapter today is one step closer to your dream. 📖",

  "Be curious. Be creative. Keep learning! 🎨"
];

function newQuote() {

  const random =
    Math.floor(Math.random() * quotes.length);

  document.getElementById("quote")
    .textContent = quotes[random];
}

newQuote();


// Initial timer
updateTimerDisplay();