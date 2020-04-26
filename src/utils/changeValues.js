export default function (values) {
    //将输入的查询数值转为字符串数组  =>  ['1','2','3']
    let numsStrArr = values.nums.match(/\d+/g)
    //获得number数组  => [1,2,3]
    let numsNumArr = []
    for(let i = 0;i<numsStrArr.length;i++){
        numsNumArr.push(Number(numsStrArr[i]))
    }

    //开始计算
    let numsMap = new Map()
    let j = 0
    //建立Map映射关系表
    for(let i = 0;i<numsNumArr.length;i++){
        let target = numsNumArr[i]
        if(numsMap.has(target)){
            continue
        }
        j = j + 1
        numsMap.set(target,j)
    }
    let resultArr = []
    numsMap.forEach((value,key)=>{
        resultArr.push(key)
    })
    return {length:j,arr:resultArr}
}