function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num / 60;
    return hours +"hours" +  ":" + "minutes" + minutes;
}
console.log(time_convert(124));
console.log(time_convert(450));
console.log(time_convert(580));
