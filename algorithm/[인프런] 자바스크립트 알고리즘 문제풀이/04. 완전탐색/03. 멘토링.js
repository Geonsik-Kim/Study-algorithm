// 우선 모든 경우의 수를 이중 for문으로 만든 뒤
// 각 경우의 수가 조건에 만족하는지 확인한다.
function solution(test) {
    let answer = 0;
    m = test.length;
    n = test[0].length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) continue; // 같은 번호의 학생이 멘토와 멘티 둘다 할 수 없으므로 그 다음 반복으로 돌아간다.
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = (pj = 0);
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }
    return answer;
}

let test = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(test));
