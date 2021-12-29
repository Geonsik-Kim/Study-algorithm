// 방법 1
function solution(t, s) {
    let answer,
        count = 0;
    for (let x of s) {
        if (x == "R") count++;
    }
    answer = count;
    return answer;
}

const str = "COMPUTERPROGRAMMING";
console.log(solution("R", str));

function solution(t, s) {
    let answer = s.split(t).length - 1;
    return answer;
}

// 방법 2
const str = "COMPUTERPROGRAMMING";
console.log(solution("R", str));
