// 1. teszt - A multiply függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof multiply, (elem) => {
    return elem === "function";
}, "A multiply függvény létezik.");

// 2. teszt - A multiply helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), multiply(4, 6), (elem) => {
    return elem === 24;
}, "A multiply(4, 6) eredménye 24.");

// 3. teszt - A toLower függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof toLower, (elem) => {
    return elem === "function";
}, "A toLower függvény létezik.");

// 4. teszt - A toLower helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), toLower("Frontend"), (elem) => {
    return elem === "frontend";
}, "A toLower('Frontend') eredménye 'frontend'.");

// 5. teszt - A lastElement függvény létezik

testBase(getElementByXpath("//div[@id='testResult']"), typeof lastElement, (elem) => {
    return elem === "function";
}, "A lastElement függvény létezik.");

// 6. teszt - A lastElement helyesen működik

testBase(getElementByXpath("//div[@id='testResult']"), lastElement([3, 8, 12, 20]), (elem) => {
    return elem === 20;
}, "A lastElement([3, 8, 12, 20]) eredménye 20.");