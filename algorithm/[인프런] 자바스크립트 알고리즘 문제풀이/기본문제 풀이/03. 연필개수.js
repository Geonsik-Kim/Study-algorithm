function solution(num) {
    /**
     *   소수점 올림 : Math.ceil
     *   소수점 버림 : Math.floor
     *   소수점 반올림 : Math.round
     */
    const answer = Math.ceil(num / 12);
    return answer;
}

console.log(solution(25));
