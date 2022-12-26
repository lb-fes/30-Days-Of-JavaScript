// length
let name = "l b"
console.log("the length of name is " + name.length)

// toUpperCase()    将字符串中所有的小写字母转换成大写字母
let language = "JavaScript"
console.log(language.toUpperCase())

// toLowerCase()    将字符串中所有的大写字母转换成小写字母
console.log(language.toLowerCase())

// substring(start, end)    截取子串
console.log(language.substring(1, 6))   // 返回从索引 1 到索引 6（不包括6）的字符

// split()
let string = "30 Days Of JavaScript"
console.log(string.split())
console.log(string.split(' '))  // 以空格分割字符串，将其存入数组

// trim()
let string1 = "  Beginning ending  "
console.log(string1)
console.log(string1.trim())     // 删除 string1 开始和结束的空格、行终止符

// includes()   查找子串是否存在（区分大小写）
console.log(string.includes("Day"))
console.log(string.includes("day"))

// replace()    替换指定的第一个子串(区分大小写), 未改变源字符串
console.log(string.replace("JavaScript", "Python"))
console.log(string.replace("Javascript", "Python"))

// charAt()     查找指定的索引并返回该索引对应的值
console.log(string.charAt(6))

// charCodeAt()     查找指定的索引并返回该索引对应的值的 ASCII 码值
console.log(string.charCodeAt(6))

// indexOf()        查找子串是否存在（区分大小写），若存在，返回子串第一次出现的位置；若不存在，返回 -1
console.log(string.indexOf('a'))
console.log(string.indexOf('A'))

// lastIndexOf()    查找子串是否存在（区分大小写），若存在，返回子串最后一次出现的位置；若不存在，返回 -1
console.log(string.lastIndexOf('a'))
console.log(string.lastIndexOf('A'))

// concat()     连接多个字符串
let province = "TaiWan"
let country = "China"
let phrase = " is a province of "
console.log(province.concat(phrase, country))

// startsWith()     判断字符串是否以指定子串开始（区分大小写）
let string2 = "Love is the best in this world"
console.log(string2.startsWith("Love"))
console.log(string2.startsWith("love"))

// endsWith()       判断字符串是否以指定子串结束（区分大小写）
console.log(string2.endsWith("orld"))
console.log(string2.endsWith("Orld"))

// search()         查找指定子串（可用正则表达式）是否存在，若存在，返回子串第一次出现的位置；若不存在，返回 -1
console.log(string2.search("i"))
console.log(string2.search("I"))
console.log(string2.search(/I/gi))      // 忽略大小写

// match()         匹配指定子串（可用正则表达式）是否存在，若存在，返回一个数组；若不存在，返回 null
console.log(string2.match("i"))
console.log(string2.match("I"))
console.log(string2.match(/I/gi))      // 忽略大小写

let txt = "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge"
/*
\d 匹配一个数字
\d+ 匹配一个或更多数字
g 全局匹配
*/
console.log(txt.match(/\d+/))       // ["2019"]
console.log(txt.match(/\d+/g))      // ["2019", "30", "2020"]

// repeat()     重复输出指定次数的字符串
let star = '0'
console.log(star.repeat(10))

