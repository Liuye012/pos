function Cart() {
  this.CartItems = [];
}

Cart.prototype.addItems = function(barcode, count) {
  var cnt = 0;
  for (var i = 0, cnt = 0; i < this.CartItems.length; i++) {
    if (barcode === this.CartItems[i].barcode) {
      this.CartItems[i].count += count;
      cnt++;
    }

  }
  if (cnt === 0) {
    var cartitem = new CartItem(barcode, count);
    this.CartItems.push(cartitem);
  }
};

Cart.prototype.getSum = function() {
  var Sum = 0;
  this.CartItems.forEach(function(val) {
    Sum += val.subTotal();
  });
  return Sum;
};

Cart.prototype.getSumPromotionTotal = function() {
  var SumPromotionTotal = 0;
  this.CartItems.forEach(function(val) {
    SumPromotionTotal += val.getPromotionTotal();
  });
  return SumPromotionTotal;
};
