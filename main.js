let words = ['사과'];
setEventListener();

function checkAnswer(prev, cur){
    //prev, cur => string
    console.log(Array.from(prev).slice(-1)[0], Array.from(cur).slice(0)[0]);
    
    if(Array.from(prev).slice(-1)[0] === Array.from(cur).slice(0)[0] 
    && !words.includes(cur) ){
        return true;
    }
    else {
        return false;
    }
}

onChange = (e) => {

    //e.preventDefault에 관하여 - 기본 동작 방지 - react에서는 false여도 기본 동작 방지x (a, submit, onChange 등 => )
    e.preventDefault();
    console.log(e);

    let container = document.querySelector('.result');
    let wordcontainer = document.querySelector('.word');
    let result;

    let prev = words.slice(-1)[0];
    let cur = e.target.value;
    console.log("words", words);
    console.log(prev, cur);

    if(checkAnswer(prev, cur) === true){
        words.push(cur);
        let textnode = document.createTextNode(cur+'->');  
        wordcontainer.appendChild(textnode);

        result = '통과';
    }
    else{
        result = '땡';
    }
    console.log(result);
    container.innerHTML = `<span>${result}</span>`;
}

function setEventListener(){
    const input = document.querySelector('input');
    input.addEventListener('change', (e) => onChange(e));
}