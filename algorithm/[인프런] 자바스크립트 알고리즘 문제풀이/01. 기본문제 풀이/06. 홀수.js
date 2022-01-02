function solution(arr) {
    let answer = [],
        sum = 0,
        min = 100;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            // 나머지가 0이면(즉, 짝수이면) false이기에 실행되지 않음
            sum += arr[i];
            if (min > arr[i]) min = arr[i];
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
