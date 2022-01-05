function solution(str) {
    let answer = "YES";
    s = str.toUpperCase().replace(/[^A-Z]/g, "");
    let len = s.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) answer = "NO";
    }

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
