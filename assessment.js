'use strict'

const name = document.getElementById("user_name");
const input = document.getElementById("assessment");
const resultDiv = document.getElementById("result");
const tweet = document.getElementById("tweet");

/**
 * 
 * @param {HTMLElement} element 
 */
function removeAllChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

input.onclick = () => {
    let userName = name.value;
    if (userName.length == 0) {
        return;
    }
    // console.log(assessment(userName));

    removeAllChild(resultDiv);
    removeAllChild(tweet);

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDiv.appendChild(header);

    const parg = document.createElement('p');
    parg.innerText = assessment(userName);
    resultDiv.appendChild(parg);
};

name.onkeydown = (event) => {
    console.log("testclick");
    if (event.key === 'Enter') {
        input.onclick();
    }
}

const answer = [
    '{userName}のいいところは声です',
    '{userName}のいいところは眼差しです',
    '{userName}のいいところは優しさです'
];

/**
 * 
 * @param {string} userName 
 * @returns {string} 診断結果
 */
function assessment(userName) {
    var sum = 0;
    for (let i = 0; i < userName.length; ++i) {
        sum += userName.charCodeAt(i);
    }
    const index = sum % answer.length;
    let result = answer[index];

    result = result.replace(/\{userName\}/g, userName);

    return result;
}
console.assert(assessment("test") == assessment("test"), "出力結果が正しくない");
