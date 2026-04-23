// 1. teszt - Az isNegative függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof isNegative, (elem) => {
    return elem === "function";
}, "Az isNegative függvény létezik.");

// 2. teszt - Az isNegative helyesen működik negatív számra

testBase(getElementByXpath("//div[@id='testResult']"), isNegative(-5), (elem) => {
    return elem === true;
}, "Az isNegative(-5) eredménye true.");

// 3. teszt - Az isNegative helyesen működik pozitív számra

testBase(getElementByXpath("//div[@id='testResult']"), isNegative(8), (elem) => {
    return elem === false;
}, "Az isNegative(8) eredménye false.");

// 4. teszt - A cube függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof cube, (elem) => {
    return elem === "function";
}, "A cube függvény létezik.");

// 5. teszt - A cube helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), cube(3), (elem) => {
    return elem === 27;
}, "A cube(3) eredménye 27.");

// 6. teszt - A reverseNumber függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof reverseNumber, (elem) => {
    return elem === "function";
}, "A reverseNumber függvény létezik.");

// 7. teszt - A reverseNumber helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), reverseNumber(1234), (elem) => {
    return elem === 4321;
}, "A reverseNumber(1234) eredménye 4321.");

// 8. teszt - A gcd függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof gcd, (elem) => {
    return elem === "function";
}, "A gcd függvény létezik.");

// 9. teszt - A gcd helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), gcd(24, 18), (elem) => {
    return elem === 6;
}, "A gcd(24, 18) eredménye 6.");

// 10. teszt - A maxOfArray függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof maxOfArray, (elem) => {
    return elem === "function";
}, "A maxOfArray függvény létezik.");

// 11. teszt - A maxOfArray helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), maxOfArray([4, 9, 2, 15, 7]), (elem) => {
    return elem === 15;
}, "A maxOfArray([4, 9, 2, 15, 7]) eredménye 15.");