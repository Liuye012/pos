//TODO: Please write code in this file.
function printReceipt(inputs) {
  var scaner = new Scaner();
  var cart = new Cart();
  var pos = new Pos();
  scaner.scan(inputs, cart);
  pos.printBills(cart);
}
