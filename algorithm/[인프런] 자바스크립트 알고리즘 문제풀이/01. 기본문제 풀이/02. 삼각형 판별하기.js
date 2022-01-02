/*
    세변 중 가장 긴 변의 길이는 나머지 두변의 길이의 합보다 작아야 한다.
*/

function solution(a, b, c) {
    let answer, max; // max : 가장 긴 변의 길이
    const sum = a + b + c; // 세변의 합

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if (sum - max > max) answer = "YES";
    else answer = "NO";

    return answer;
}

console.log(solution(20, 40, 22)); // YES
console.log(solution(6, 20, 5)); // NO
