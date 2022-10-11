class interfacecalss {
  void getname(a, b) {}
  void getage(a, b) {}
  void gettwon(a, b) {}
}

class allget implements interfacecalss {
  @override
  void getage(a, b) {
    print(a + b);
  }

  @override
  void getname(a, b) {
    print(a * b);
  }

  @override
  void gettwon(a, b) {
    print(a - b);
  }
}
