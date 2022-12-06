const PI = Math.PI
console.log("PI = " + PI)

// Math.round() 四舍五入
console.log(Math.round(PI))     
console.log(Math.round(9.81))

console.log(Math.floor(PI)) // 向下取整
console.log(Math.ceil(PI))  // 向上取整

console.log(Math.min(-5, 3, 20, 4, 5, 10))  // 返回最小值
console.log(Math.max(-5, 3, 20, 4, 5, 10))  // 返回最大值

const randNum = Math.random()   // 创建一个 0 ~ 1 之间的伪随机数    0 <= randNum < 1
console.log(randNum)

// 创建一个 0 ~ 10 的随机整数
const num = Math.floor(Math.random() * 11)
console.log(num)

console.log(Math.abs(-10))  // 求绝对值

console.log(Math.sqrt(100)) // 开平方

console.log(Math.pow(3, 2)) // 求幂

console.log(Math.E) // 2.718281828459045 自然常数

// 自然对数
console.log(Math.log(2))    // 返回 2 的自然对数    0.6931471805599453
console.log(Math.log(10))
console.log(Math.LN2)       // 2 的自然对数
console.log(Math.LN10)      // 10 的自然对数

// 三角函数
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))
