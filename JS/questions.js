(function(){
    const titleQuestions = [...document.querySelectorAll(".questions-title")];

    titleQuestions.forEach(questions =>{
        questions.addEventListener('click', ()=>{
            let height = 0;
            let answer = questions.nextElementSibling;
            let addPadding = questions.parentElement.parentElement;

            addPadding.classList.toggle('questions-padding--add');
            questions.children[0].classList.toggle('questions-arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
        })
    })
})();