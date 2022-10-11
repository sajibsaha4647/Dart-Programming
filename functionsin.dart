void main(List<String> args) {
  sum();
}

sum() {
  var a = 10;
  var b = 20;

  var result = a + b;

  print(result);
}

void mainr() {
  var sumfun = new Sumfun();
  sumfun.sum();
}

class Sumfun {
  sum() {
    var a = 10;
    var b = 20;
    var result = a + b;
    print(result);
  }
}
