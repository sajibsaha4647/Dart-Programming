//dart programming
import 'inheritanceOverriding.dart';
import 'keywordDifference.dart';
import 'oop.dart';

void main() {
  // print("bdtask");
  var keywords = new Keyword();
  dynamic names = "sajib";
  names = 21;

  var list = [];

  list.insert(0, "element");
  list.insertAll(0, ["element", "sdf", "sdss"]);

  keywords.differencefinlandcost();

  var oops = oop();

  oops.getname();

  var inherit = son();

  inherit.addtwo(10, 12);
  inherit.addtwosum(10, 20);
  son.getmergeitem();

  print(list);
}
