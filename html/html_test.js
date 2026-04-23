// 1. teszt - A H1 elem helyesen jelenik meg

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//h1"), (elem) => {
    return elem != null && elem.textContent === "Szolgáltatásaink";
}, "A H1 elem helyesen jelenik meg, és tartalma 'Szolgáltatásaink'.");

// 2. teszt - A H1 elem színe helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//h1"), (elem) => {
    return elem != null && elem.style.color === "rgb(138, 43, 226)";
}, "A H1 elem színe lila (#8A2BE2).");

// 3. teszt - A H1 elem betűmérete helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//h1"), (elem) => {
    return elem != null && elem.style.fontSize === "28px";
}, "A H1 elem betűmérete 28px.");

// 4. teszt - A section elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']"), (elem) => {
    return elem != null;
}, "A section elem létezik.");

// 5. teszt - A section háttérszíne helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']"), (elem) => {
    return elem.style.backgroundColor === "rgb(245, 245, 245)";
}, "A section elem háttérszíne helyes (#F5F5F5).");

// 6. teszt - A section paddingje helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']"), (elem) => {
    return elem.style.padding === "20px";
}, "A section elem belső margója 20px.");

// 7. teszt - A section felső margója helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']"), (elem) => {
    return elem.style.marginTop === "15px";
}, "A section elem felső margója 15px.");

// 8. teszt - A H3 elem helyesen jelenik meg

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//h3"), (elem) => {
    return elem != null && elem.textContent === "Mit kínálunk?";
}, "A H3 elem helyesen jelenik meg, és tartalma 'Mit kínálunk?'.");

// 9. teszt - A H3 igazítása és színe helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//h3"), (elem) => {
    return elem.style.textAlign === "center" && elem.style.color === "rgb(51, 51, 51)";
}, "A H3 elem középre igazított és színe #333333.");

// 10. teszt - A lista három elemet tartalmaz

testBase(getElementByXpath("//div[@id='testResult']"), getElementsByXpath("//section[@id='services']//ul/li"), (elems) => {
    return elems.length === 3;
}, "A lista három elemet tartalmaz.");

// 11. teszt - Az első listaelem szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//ul/li[1]"), (elem) => {
    return elem != null && elem.textContent === "Weboldal készítés";
}, "Az első listaelem szövege 'Weboldal készítés'.");

// 12. teszt - A második listaelem szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//ul/li[2]"), (elem) => {
    return elem != null && elem.textContent === "Reszponzív dizájn";
}, "A második listaelem szövege 'Reszponzív dizájn'.");

// 13. teszt - A harmadik listaelem szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//ul/li[3]"), (elem) => {
    return elem != null && elem.textContent === "Karbantartás";
}, "A harmadik listaelem szövege 'Karbantartás'.");

// 14. teszt - A bekezdés szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//p"), (elem) => {
    return elem != null && elem.textContent.trim() === "Vegye fel velünk a kapcsolatot további információért!";
}, "A bekezdés szövege helyes.");

// 15. teszt - A bekezdés stílusa helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//p"), (elem) => {
    return elem.style.color === "rgb(255, 69, 0)" &&
           elem.style.fontSize === "18px" &&
           elem.style.fontWeight === "bold";
}, "A bekezdés színe #FF4500, betűmérete 18px, betűvastagsága bold.");

// 16. teszt - A gomb szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//button"), (elem) => {
    return elem != null && elem.textContent.trim() === "Ajánlatkérés";
}, "A gomb felirata 'Ajánlatkérés'.");

// 17. teszt - A gomb stílusa helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//button"), (elem) => {
    return elem.style.backgroundColor === "rgb(255, 215, 0)" &&
           elem.style.border === "1px solid rgb(0, 0, 0)" &&
           elem.style.padding === "12px" &&
           elem.style.cursor === "pointer";
}, "A gomb háttérszíne #FFD700, szegélye 1px solid #000000, paddingje 12px, kurzora pointer.");

// 18. teszt - A link szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//a"), (elem) => {
    return elem != null && elem.textContent.trim() === "Tekintse meg referenciaoldalainkat!";
}, "A link szövege helyes.");

// 19. teszt - A link URL-je helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//a"), (elem) => {
    return elem.href === "https://example.com/";
}, "A link URL-je helyesen beállított (https://example.com).");

// 20. teszt - A link stílusa helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section[@id='services']//a"), (elem) => {
    return elem.style.color === "rgb(0, 0, 139)" &&
           elem.style.textDecoration === "underline" &&
           elem.style.marginLeft === "10px";
}, "A link színe #00008B, aláhúzott, és bal oldali margója 10px.");