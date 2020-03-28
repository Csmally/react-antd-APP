export default function (values) {
    let target = values.target
    //将输入的查询数值转为字符串数组  =>  ['1','2','3']
    let numsStrArr = values.nums.match(/\d+/g)
    //获得number数组  => [1,2,3]
    let numsNumArr = []
    for(let i = 0;i<numsStrArr.length;i++){
        numsNumArr.push(Number(numsStrArr[i]))
    }

    //开始计算
    let targetMap = new Map()
    //建立Map映射关系表
    for(let i = 0;i<numsNumArr.length;i++){
        debugger
        let key = target - numsNumArr[i]
        //如果映射关系表中存在key,则返回key对应的i和当前的i
        //判断条件放在for循环中可以避免同一个元素使用两遍
        //如果先建立Map表，再循环判断是否符合target且不增加其他罗技判断，会造成找出两对符合条件的数值
        //如target=8  找出3+5=8和5+3=8
        //此方法只适用于给定数组中只存在一对目标值
        if(targetMap.has(key)){
            return [targetMap.get(key),i]
        }
        targetMap.set(numsNumArr[i],i)
    }
}