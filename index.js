const startBtn = document.getElementById("start");
startBtn.addEventListener("click", start);
let id = 1;
let points = 0;

const lis = document.getElementsByTagName("li");
Array.from(lis).forEach(l => l.addEventListener("click", select));

function select (event) {
    let element = event.target;
    if(element.style.textDecoration == "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
}

function start(event) {
    console.log(event.target);
    startBtn.style.display = "none";
  openSection(id);
}

function openSection(id) {
  if (id > 11) {
    const section = document.getElementById("final");
    section.style.display = "block";
    document.getElementById("points").textContent = `Points: ${points}/11`;
} else {
    const section = document.getElementById(id);
    section.style.display = "block";
    const revealBtn = document.getElementById(`asw-${id}`);
    const form = document.getElementById(`form-${id}`);
    form.addEventListener("submit", revealAsw);
    revealBtn.style.display = "none";
    const nextQ = document.getElementById(`next-${id}`);
    nextQ.addEventListener("click", getNext);
    function revealAsw(event) {
      event.preventDefault();
      const input = document.getElementById(`i-${id}`);
      const asw = input.value;
      revealBtn.style.display = "block";
      const correctAsw = revealBtn.querySelector("strong").textContent;
      if (asw === correctAsw) {
        input.className = "correct";
        points++;
      } else {
        input.className = "error";
      }
    }

    function getNext(event) {
        section.style.display = "none";
        id++;
        openSection(id);
    }

  }
}
