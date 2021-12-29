function solution(s) {
    let answer = [];

    // v : 요소값
    // i : 요소의 인덱스
    answer = s.filter(function (v, i) {
        return s.indexOf(v) === i;
    });
    return answer;
}

const arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));
