function solution(n, arr) {
    let answer = 0,
        sum = 0,
        left = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum > n) {
            sum -= arr[left++];
        }
        answer += right - left + 1;
    }

    return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
