// 방법1
function solution(str) {
    let answer;
    let s = str.replace(/[^0-9]/g, "");
    answer = s;

    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

// 방법2
function solution(str) {
    let answer = "";
    for (let x of str) {
        if (isNaN(x) == false) answer += x;
    }

    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
