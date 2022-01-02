function solution(day, arr) {
    let answer = 0;
    for (let i of arr) {
        if (day == i % 10) answer++;
    }
    return answer;
}

const day = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(day, arr));
