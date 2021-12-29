function solution(str) {
    let answer = str.replace(/A/g, "#");
    return answer;
}

const str = "BANANA";
console.log(solution(str));
