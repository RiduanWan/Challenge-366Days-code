// function countBy(x, n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i * x);
//   }
//   return result;
// }

const countBy = (x, n) => Array.from({length:n}, (_,i) => (i+1)*x);

console.log(countBy(2, 9));