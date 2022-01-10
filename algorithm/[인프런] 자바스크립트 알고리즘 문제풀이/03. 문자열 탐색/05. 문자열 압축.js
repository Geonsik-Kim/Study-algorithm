function solution(s, t) {
    console.log(s.length);
    let answer = "",
        cnt = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            cnt++;
        } else {
            answer += s[i];
            if (cnt !== 1) {
                answer += cnt;
            }

            cnt = 1;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
