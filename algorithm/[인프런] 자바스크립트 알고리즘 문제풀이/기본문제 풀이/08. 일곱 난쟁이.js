/*
 * 이중 for문을 활용하여 2개의 값을 제외해가면서 확인한다
 */
function solution(arr) {
    let answer,
        sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum = sum + arr[x];
    }

    outerFor: for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum - (arr[i] + arr[j]) < 100) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                break outerFor;
            }
        }
    }
    answer = arr;
    return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
