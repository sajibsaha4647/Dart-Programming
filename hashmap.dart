//javascript hashmap

import 'dart:collection';

void main(List<String> args) {
  var hash = new HashMap();

  hash["name"] = "sajib";
  hash.addAll({
    "age": 32,
    "hometown": "dhaka",
  });
  print(hash);
}
