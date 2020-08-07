function maxNumber(x, y, z) {

    var max = 0;

    if((x >= y) && (y >= z)){
        max = x;

    }
    else if((y >= x) && (y >=z)){
        max = y;
    }
    else{
        max = z;
    }
    return max; 
} 

var myArr = [];
for(i=0;i<3;i++){
    myArr[i] = parseInt("Enter a number");
}