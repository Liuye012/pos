var allItems = loadAllItems();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.getInfo();
}

CartItem.prototype.getInfo = function() {
  var barcodeTemp = this.barcode;
  var items = allItems.filter(function(val) {
    return val.barcode === barcodeTemp;
  });
  return items[0];
};

CartItem.prototype.subTotal = function() {
  return this.getInfo().price * (this.count - this.getPromotionCount());
};

CartItem.prototype.getPromotionTotal = function() {
  return this.getInfo().price * this.getPromotionCount();
};

CartItem.prototype.getPromotionCount = function() {
  var promotionInfo = loadPromotions();
  var promotioncount = 0;
  var barcode = this.barcode;
  var count = this.count;
  promotionInfo[0].barcodes.forEach(function(val) {
    if (val === barcode) {
      promotioncount = Math.floor(count / 3);
    }
  });
  return promotioncount;
};
