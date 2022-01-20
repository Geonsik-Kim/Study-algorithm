// 모든 경우의 수를 Set(중복 된 숫자는 포함하지 않아야 하므로)에 담는다.
function solution(n, k, card) {
    let answer;
    let tmp = new Set();
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let x = j + 1; x < n; x++) {
                tmp.add(card[i] + card[j] + card[x]);
            }
        }
    }
    answer = Array.from(tmp).sort((a, b) => b - a)[k - 1];
    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
