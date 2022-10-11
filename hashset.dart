import 'dart:collection';

void main(List<String> args) {
  var hashset = new HashSet();

  hashset.addAll({23, 23, 23, 23, 32});

  hashset.remove(23);

  print(hashset);
}
