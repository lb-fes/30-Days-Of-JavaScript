// level 2
// 1.
// 不要在空格前使用 \ 进行断行，不然换行后会多出空格
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' \
by John Holmes teaches us to help one another.")

// 2.
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \
-- with charity you give love, so don\'t just give money but reach out your hand instead.")

// 8. 生成一个 50 到 100 的伪随机数
let c = 50
let d = 100
let randomNum = c + Math.random()*(d-c+1)
console.log(randomNum)

// 9. 生成一个 0 到 255 的伪随机数
let randomNum1 = 0 + Math.random()*(255-0+1)
console.log(randomNum1)

// 11. 打印图案
let pattern = "\
1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125"
console.log(pattern)

// level 3
// 1.
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(sentence.match(/love/g).length)

// 3. 清理以下文本并找到出现最频繁的单词
const sentence1 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; \
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re \
interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is \
30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching."
/*
    %|@ : 匹配 % 和 @
    匹配 $ 需要进行转义：\$
*/
console.log(sentence1.replace(/%|@|\$|#|&|;/g, ''))

// 4. 通过提取数字从下列文本中计算出这个人的总年度收入
const sentence2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let array = sentence2.match(/\d+/g)
let total = 0
for(i = 0; i < array.length; i++){
    total += parseInt(array[i])
}
console.log(total)