//TODO: Please write code in this file.
function printReceipt(inputs) {
var sum=0;
var result='***<没钱赚商店>收据***\n';
inputs.forEach(function(val){
  result+='名称：'+val.name+'，数量：'+val.count+val.unit+'，单价：'+val.price.toFixed(2)+'(元)，'+'小计：'+(val.price*val.count).toFixed(2)+'(元)\n';
  sum+=val.price*val.count;
});
result+='----------------------\n'+'总计：'+sum.toFixed(2)+'(元)\n'+'**********************';
console.log(result);

}
