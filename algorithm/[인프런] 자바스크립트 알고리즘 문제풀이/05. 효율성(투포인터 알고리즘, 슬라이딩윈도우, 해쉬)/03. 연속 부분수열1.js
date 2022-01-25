// 이중 반복문으로 연속 구간을 찾음
// 시간 복잡도 O(n^2)
// 시간 복잡도 O(n^2) => O(n) 투포인터 알고리즘 활용 가능
function solution(n, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let count = i;
        while (sum < n) {
            sum += arr[count++];
            if (sum === n) answer++;
        }
    }

    return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));

// 투포인터 알고리즘으로 연속 구간 찾음
// 시간 복잡도 O(n)
function solution(n, arr) {
    let answer = 0,
        sum = 0,
        left = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        if (sum === n) answer++;
        while (sum >= n) {
            sum -= arr[left++];
            if (sum === n) answer++;
        }
    }

    return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
