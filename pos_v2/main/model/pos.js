function Pos() {}
Pos.prototype.printBills = function(cart) {
  var inputslist = cart.CartItems;
  var time = new Time();
  var result = '***<没钱赚商店>收据***\n';
  result += '打印时间：' + time.getTime();
  result += '\n----------------------\n';
  inputslist.forEach(function(val) {
    result += '名称：' + val.getInfo().name + '，' +
      '数量：' + val.count + val.getInfo().unit + '，' +
      '单价：' + val.getInfo().price.toFixed(2) + '(元)，' +
      '小计：' + val.subTotal().toFixed(2) + '(元)\n';
  });
  result += '----------------------\n';
  result += '挥泪赠送商品：\n';
  inputslist.forEach(function(val) {
    if (val.subTotal() !== val.count * val.getInfo().price) {
      result += '名称：' + val.getInfo().name + '，' +
        '数量：' + val.getPromotionCount() + val.getInfo().unit + '\n';
    }
  });
  result += '----------------------\n' +
    '总计：' + cart.getSum().toFixed(2) + '(元)\n' +
    '节省：' + cart.getSumPromotionTotal().toFixed(2) + '(元)\n' +
    '**********************';
  console.log(result);
};
