// num부터 1까지 거꾸로 더해지는 방식
/* 
function solution(num) {
    let answer = 0;
    for (let i = num; i >= 1; i--) {
        answer = answer + i;
    }
    return answer;
}
*/

// 1부터 num까지 더해지는 방식
function solution(num) {
    let answer = 0;
    for (let i = 1; num >= i; i++) {
        answer = answer + i;
    }
    return answer;
}

console.log(solution(10));
