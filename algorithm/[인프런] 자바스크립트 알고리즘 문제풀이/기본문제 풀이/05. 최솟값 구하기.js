function solution(arr) {
    let answer;
    answer = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (answer > arr[i]) answer = arr[i];
    }
    return answer;
}

const arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
