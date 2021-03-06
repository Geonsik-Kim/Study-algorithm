// 중복을 허용하며 합치는 경우
// 길이가 짧은 배열이 끝날 때 까지 서로 비교하여 push를 하고
// 길이가 짧은 배열이 끝나면 긴 쪽에 원소를 순서대로 push 한다.
function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0;
    let p2 = 0;

    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }

    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 중복을 허용하지 않고 합치는 경우
function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0;
    let p2 = 0;

    while (p1 < n && p2 < m) {
        if (arr1[p1] < arr2[p2]) {
            answer.push(arr1[p1++]);
        } else if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else answer.push(arr2[p2++]);

        console.log(p1, p2);
    }

    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
