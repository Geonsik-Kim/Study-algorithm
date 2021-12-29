function solution(s) {
    let answer = "",
        mid = Math.floor(s.length / 2);
    if (s.length % 2) {
        // 홀수이면
        answer = s[mid];
    } else {
        // 짝수이면
        answer = s.substring(mid - 1, mid + 1);
    }
    return answer;
}

const str = "study";
console.log(solution(str));
