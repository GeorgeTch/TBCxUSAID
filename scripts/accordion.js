// const questionRowArr = document.getElementsByClassName("question-row");
// const answerRowArr = document.getElementsByClassName("answer-block");
// const arrowIconsArr = document.getElementsByClassName("qa-icon");
// console.log(questionRowArr);
// console.log(answerRowArr);
// let prevOpenAccordionIndex = null;

// function accordionHandler(e) {
//     const currentAccordionIndex = +e.currentTarget.id.slice(-1);
//     const targetAnswer = answerRowArr[currentAccordionIndex];
//     const targetAnswerIcon = arrowIconsArr[currentAccordionIndex];
//     if(prevOpenAccordionIndex != null && prevOpenAccordionIndex != currentAccordionIndex) {
//         const prevAccordion = answerRowArr[prevOpenAccordionIndex];
//         const prevTargetAnswerIcon = arrowIconsArr[prevOpenAccordionIndex];
//         prevAccordion.style.height = '0px';
//         prevAccordion.classList.toggle('answer-block-visible');
//         prevTargetAnswerIcon.classList.toggle('qa-icon-opened');
//     }
//     if(prevOpenAccordionIndex !== currentAccordionIndex) {
//         targetAnswer.classList.toggle('answer-block-visible');
//         targetAnswerIcon.classList.toggle('qa-icon-opened');
//         targetAnswer.style.height = `${targetAnswer.scrollHeight}px`;
//         prevOpenAccordionIndex = currentAccordionIndex;
//     }
//     else {
//         targetAnswer.style.height = '0px';
//         prevOpenAccordionIndex = null;
//         targetAnswer.classList.toggle('answer-block-visible');
//         targetAnswerIcon.classList.toggle('qa-icon-opened');
//     }
// }

const questionRowArr = document.querySelectorAll(".question-row");
const answerRowArr = document.querySelectorAll(".answer-block");
const arrowIconsArr = document.querySelectorAll(".qa-icon");
let prevOpenAccordionIndex = null;

function closeAccordion(index) {
    const prevAccordion = answerRowArr[index];
    const prevTargetAnswerIcon = arrowIconsArr[index];
    prevAccordion.style.height = '0px';
    prevAccordion.classList.remove('answer-block-visible');
    prevTargetAnswerIcon.classList.remove('qa-icon-opened');
}

function openAccordion(index) {
    const targetAnswer = answerRowArr[index];
    const targetAnswerIcon = arrowIconsArr[index];
    targetAnswer.classList.add('answer-block-visible');
    targetAnswerIcon.classList.add('qa-icon-opened');
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