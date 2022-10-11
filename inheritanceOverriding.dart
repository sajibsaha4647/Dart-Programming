abstract class father {
  father() {
    print("constractor");
  }

  addtwo(a, b) {
    print(a + b);
  }

  addtwosum(a, b) {
    print(a * b);
  }
}

class son extends father {
  @override
  addtwo(a, b) {
    print(a - b);
  }

  @override
  addtwosum(a, b) {
    return super.addtwosum(a, b);
  }

  static getmergeitem() {
    print("object3");
  }
}
