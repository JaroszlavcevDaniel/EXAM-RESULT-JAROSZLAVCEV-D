function isNegative(n) {

    if(n < 0) {
        return true;
    } else {
        return false;
    }

}

function cube(n) {

    return result = n ** 3;
}

function reverseNumber(n) {

    return reverseNumber(n);

}

function gcd(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function maxOfArray(arr) {
    let max = arr[0];
    for(let num of arr) {
        if(num > max) {
            max = num;
        }
    } return max;
}