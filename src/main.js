import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
list.prepend("beaver");
console.log(list.toString());
list.insertAt("seal", 1);
console.log(list.toString());
console.log(list.at(1));
list.removeAt(1);
console.log(list.toString());
console.log(list.contains("snake"));
console.log(list.contains("piglet"));

console.log(list.find("parrot"));
console.log(list.toString());
console.log(list.find("human"));
