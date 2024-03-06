const questionRowArr = document.querySelectorAll(".question-row");
const answerRowArr = document.querySelectorAll(".answer-block");
const arrowIconsArr = document.querySelectorAll(".qa-icon");
let prevOpenAccordionIndex = null;

function closeAccordion(index) {
  const prevAccordion = answerRowArr[index];
  const prevTargetAnswerIcon = arrowIconsArr[index];
  prevAccordion.style.height = "0px";
  prevAccordion.classList.remove("answer-block-visible");
  prevTargetAnswerIcon.classList.remove("qa-icon-opened");
}

function openAccordion(index) {
  const targetAnswer = answerRowArr[index];
  const targetAnswerIcon = arrowIconsArr[index];
  targetAnswer.classList.add("answer-block-visible");
  targetAnswerIcon.classList.add("qa-icon-opened");
  targetAnswer.style.height = `${targetAnswer.scrollHeight}px`;
}

function toggleAccordion(e) {
  const currentAccordionIndex = +e.currentTarget.id.slice(-1);
  const isOpen = prevOpenAccordionIndex === currentAccordionIndex;

  if (prevOpenAccordionIndex !== null && !isOpen) {
    closeAccordion(prevOpenAccordionIndex);
  }

  if (!isOpen) {
    openAccordion(currentAccordionIndex);
    prevOpenAccordionIndex = currentAccordionIndex;
  } else {
    closeAccordion(currentAccordionIndex);
    prevOpenAccordionIndex = null;
  }
}
