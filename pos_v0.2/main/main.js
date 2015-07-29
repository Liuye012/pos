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

function find_info(val_inputs, result) {
  var cnt = 0;
  var allItems = loadAllItems();
  allItems.forEach(function(val) {
    if (val.barcode === val_inputs) {
      for (var i = 0, cnt = 0; i < result.length; i++) {
        if (result[i].barcode === val_inputs) {
          result[i].count++;
          cnt++;
        }
      }
      if (cnt === 0) {
        new_object(val, result);
      }
    }
  });
}

function get_result(inputs, result) {
  inputs.forEach(function(val) {
    find_info(val, result);
  });
}

function printReceipt(inputs) {
  var result = [];
  get_result(inputs, result);
  var sum = 0;
  var result_print = '***<没钱赚商店>收据***\n';
  result.forEach(function(val) {
    result_print += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' + val.price.toFixed(2) + '(元)，' + '小计：' + (val.price * val.count).toFixed(2) + '(元)\n';
    sum += val.price * val.count;
  });
  result_print += '----------------------\n' + '总计：' + sum.toFixed(2) + '(元)\n' + '**********************';
  console.log(result_print);
}
