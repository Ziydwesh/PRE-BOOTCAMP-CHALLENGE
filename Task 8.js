function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num / 60;
    return hours + ":" + minutes;
}
console.log(time_convert(72));
console.log(time_convert(800));
console.log(time_convert(580));