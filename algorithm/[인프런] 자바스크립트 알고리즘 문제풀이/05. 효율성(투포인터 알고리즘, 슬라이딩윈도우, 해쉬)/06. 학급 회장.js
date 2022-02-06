// 객체 리터럴 활용
function solution(str) {
    let answer = "";
    let max = 0;
    let idx = 0;
    let vote = str.split("");

    let hash = vote.reduce((obj, val) => {
        obj[val] = ++obj[val] || 1;
        return obj;
    }, {});

    for (let i in hash) {
        if (hash[i] > max) {
            max = hash[i];
            idx = i;
        }
    }

    answer = idx;
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

// map 객체 활용
function solution(s) {
    let answer;
    let sH = new Map();
    for (let x of s) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    let max = 0;

    for (let [key, val] of sH) {
        if (val > max) {
            max = val;
            answer = key;
        }
    }

    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
