void main(List<String> args) {
  var maps = {"name": "sajib", "age": 43, "town": "comilla"};
  maps["city"] = "dhaka";
  print(maps);

//using map functions
  var map = new Map();
  map["name"] = "sajib";
  print(map.values);
}
