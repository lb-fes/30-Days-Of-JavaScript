// 将整数字符串转换为整数
let num1 = '10'
let numInt = parseInt(num1)
let numInt1 = Number(num1)
let numInt2 = + num1
console.log(numInt, numInt1, numInt2)

let num2 = "30 Days"                // 字符串中存在非数字的情况           
let numInt3 = parseInt(num2)        // 只转换字符串中的数字
let numInt4 = Number(num2)          // 无法转换
let numInt5 = + num2                // 无法转换
console.log(numInt3, numInt4, numInt5)

// 将浮点数字符串转换为浮点数
let num3 = "9.81"
let numFloat = parseFloat(num3)
let numFloat1 = Number(num3)
let numFloat2 = + num3
console.log(numFloat, numFloat1, numFloat2)

let num4 = "30.1 Days"                // 字符串中存在非数字的情况           
let numFloat3 = parseFloat(num4)      // 只转换字符串中的数字
let numFloat4 = Number(num4)          // 无法转换
let numFloat5 = + num4                // 无法转换
console.log(numFloat3, numFloat4, numFloat5)

// 将浮点数转换为整数
let num5 = 9.81
let numInt6 = parseInt(num5)          // 向下取整
console.log(numInt6)