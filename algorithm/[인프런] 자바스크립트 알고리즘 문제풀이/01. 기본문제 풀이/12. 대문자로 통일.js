function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
    }
    return answer;
}

const str = "ItisTimeToStudy";
console.log(solution(str));
