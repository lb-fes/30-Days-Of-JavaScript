const PI = Math.PI
console.log("PI = " + PI)

// Math.round() 四舍五入
console.log(Math.round(PI))     
console.log(Math.round(9.81))

console.log(Math.floor(PI)) // 向下取整
console.log(Math.ceil(PI))  // 向上取整

console.log(Math.min(-5, 3, 20, 4, 5, 10))  // 返回最小值
console.log(Math.max(-5, 3, 20, 4, 5, 10))  // 返回最大值

const randNum = Math.random()   // 创建一个 0 ~ 1 (不包括 1 )的随机数
console.log(randNum)

// 创建一个 0 ~ 10 的随机整数
const num = Math.floor(Math.random() * 11)
console.log(num)
