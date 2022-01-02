function solution(arr) {
    let answer = "",
        max = 0;
    for (let x of arr) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }

    return answer;
}

const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr));
