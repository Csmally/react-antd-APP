export default function (values) {
    //将输入的查询数值转为字符串数组  =>  ['1','2','3']
    let numsStrArr = values.nums.match(/\d+/g)
    //获得number数组  => [1,2,3]
    let numsNumArr = []
    for(let i = 0;i<numsStrArr.length;i++){
        numsNumArr.push(Number(numsStrArr[i]))
    }

    //开始计算
    let flag = false
    let target = values.target
    for(let i = 0;i<numsNumArr.length;i++){
        if(numsNumArr[i]==target){
            flag = true
            break
        }
    }
    if(flag==false){
        numsNumArr.push(target)
    }
    numsNumArr.sort((a,b)=>a-b)
    let index = numsNumArr.indexOf(target)
    return { arr:numsNumArr,index:index}
}