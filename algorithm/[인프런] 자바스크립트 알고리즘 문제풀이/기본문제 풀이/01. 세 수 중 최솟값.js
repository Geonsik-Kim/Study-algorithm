function solution(a, b, c) {
    let answer;
    if (a < b) {
        answer = a;
        //   if (a > c)
        //     answer = c;
        //   }
    } else {
        answer = b;
        //   if (b > c) {
        //     answer = c;
        //   }
    }
    if (c < answer) answer = c; // 위에서 a, b 중 작은 수와 c를 비교하는 중복 작업을 한번으로 줄임
    return answer;
}

console.log(solution(2, 5, 1));
