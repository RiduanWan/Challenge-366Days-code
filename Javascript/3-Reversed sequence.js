// const reverseSeq = n => {
//     const result = i[];
//     for (let i = n ; i >=1; i--) {
//         return.push(i);
//     }
//     return result;
// };

const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
