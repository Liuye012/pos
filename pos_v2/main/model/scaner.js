function Scaner() {
}

Scaner.prototype.scan = function(inputs,cart) {
  var item = {};
  inputs.forEach(function(val) {
    if (val.indexOf('-') > -1) {
      item.barcode=val.slice(0, val.indexOf('-'));
      item.count=parseInt(val.slice(val.indexOf('-')+1));
    }else{
      item.barcode=val;
      item.count=1;
    }
    cart.addItems(item.barcode,item.count);
  });
};
