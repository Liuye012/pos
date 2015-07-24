//TODO: Please write code in this file.
function new_object(val, result) {
  var m = {};
  m.barcode = val.barcode;
  m.name = val.name;
  m.unit = val.unit;
  m.price = val.price;
  m.count = 1;
  result.push(m);

}

function group_by_barcode(inputs, result) {
  var cnt = 0;
  inputs.forEach(function(val) {
    for (var i = 0, cnt = 0; i < result.length; i++) {
      if (result[i].barcode === val.barcode) {
        result[i].count++;
        cnt++;
      }
    }
    if (cnt === 0) {
      new_object(val, result);
    }
  });

}

function printReceipt(inputs) {
  var result = [];
  group_by_barcode(inputs, result);
  var sum = 0;
  var result_print = '***<没钱赚商店>收据***\n';
  result.forEach(function(val) {
    result_print += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' + val.price.toFixed(2) + '(元)，' + '小计：' + (val.price * val.count).toFixed(2) + '(元)\n';
    sum += val.price * val.count;
  });
  result_print += '----------------------\n' + '总计：' + sum.toFixed(2) + '(元)\n' + '**********************';
  console.log(result_print);

}
