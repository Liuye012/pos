var allItems = getAllItems();

function CartItems(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.attachProp();
}

CartItems.prototype.attachProp = function() {
  var items = [];
  items = allItems.filter(function(val) {
    return val.barcode === barcode;
  });
  return items[0];
};

CartItems.prototype.suntotal = function() {
  return this.attachProp.price * (this.count - this.getPromotionCount);
};

CartItems.prototype.getPromotionTotal = function() {
  return this.attachProp.price * this.getPromotionCount;
};

CartItems.prototype.getPromotionCount = function() {
  var promotion = loadPromotions();
  var promotioncount;
  promotion.barcodes.forEach(function(val) {
    if (val === barcode) {
      promotioncount = Math.floor(count / 3);
    }
  });
  return promotioncount;
};
