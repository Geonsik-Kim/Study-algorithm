function solution(arr) {
    let answer = 0,
        score = 0;
    num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            num++;
            score += num;
        } else {
            num = 0;
        }
    }
    answer = score;
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
