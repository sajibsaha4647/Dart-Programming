void main(List<String> args) {
  var sets = new Set();
//removing duplicated value
  sets.add("20");
  sets.add("20");
  sets.add("20");
  sets.add("20");

  var objvalue = new Set.from(["elements", "43", 45, 67, 45, 34, 43, "new"]);

  objvalue.forEach((element) {
    print(element);
  });

  for (var i = 0; i < objvalue.length; i++) {
    print(objvalue);
  }
}
