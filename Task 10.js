function Array() {

var vowels = "AEIOUaeiou";

  var string = "freeCodeCamp";

var Array = " ";
for(i = 0; i < string.length; i++) {
  if(vowels.indexOf(string[i]) >= 0)
Array += string[i];
}
console.log(Array);
}
