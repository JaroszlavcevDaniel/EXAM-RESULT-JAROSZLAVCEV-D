// 1. teszt - A section elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section"), (elem) => {
    return elem != null;
}, "A section elem létezik.");

// 2. teszt - A container elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section//div[contains(@class,'container')]"), (elem) => {
    return elem != null;
}, "A container elem létezik a section elemen belül.");

// 3. teszt - A row elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section//div[contains(@class,'row')]"), (elem) => {
    return elem != null;
}, "A row elem létezik a container elemen belül.");

// 4. teszt - Létezik col-lg-6 oszlop

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//section//div[contains(@class,'col-lg-6')]"), (elem) => {
    return elem != null;
}, "Létezik egy col-lg-6 szélességű oszlop.");

// 5. teszt - Két oldalsó col-lg-3 oszlop létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementsByXpath("//section//div[contains(@class,'col-lg-3')]"), (elems) => {
    return elems.length === 2;
}, "Két darab col-lg-3 oldalsó oszlop létezik.");

// 6. teszt - A form elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//form"), (elem) => {
    return elem != null;
}, "A form elem létezik.");

// 7. teszt - A form metódusa helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//form"), (elem) => {
    return elem.method.toLowerCase() === "post";
}, "A form metódusa POST.");

// 8. teszt - A form action helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//form"), (elem) => {
    return elem.getAttribute("action") === "appointment.php";
}, "A form action értéke appointment.php.");

// 9. teszt - A fullname mező helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//input[@id='fullname']"), (elem) => {
    return elem != null &&
           elem.getAttribute("type") === "text" &&
           elem.getAttribute("name") === "fullname" &&
           elem.classList.contains("form-control");
}, "A fullname mező típusa text, neve fullname, és form-control osztályt használ.");

// 10. teszt - A phone mező helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//input[@id='phone']"), (elem) => {
    return elem != null &&
           elem.getAttribute("type") === "text" &&
           elem.getAttribute("name") === "phone" &&
           elem.classList.contains("form-control");
}, "A phone mező típusa text, neve phone, és form-control osztályt használ.");

// 11. teszt - Az appointment_date mező helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//input[@id='appointment_date']"), (elem) => {
    return elem != null &&
           elem.getAttribute("type") === "date" &&
           elem.getAttribute("name") === "appointment_date" &&
           elem.classList.contains("form-control");
}, "Az appointment_date mező típusa date, neve appointment_date, és form-control osztályt használ.");

// 12. teszt - Három formázott mezőblokk létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementsByXpath("//form/div[contains(@class,'mb-3')]"), (elems) => {
    return elems.length === 3;
}, "Az űrlap három mezőblokkot tartalmaz.");

// 13. teszt - Három label elem létezik

testBase(getElementByXpath("//div[@id='testResult']"), getElementsByXpath("//form//label"), (elems) => {
    return elems.length === 3;
}, "Az űrlap három label elemet tartalmaz.");

// 14. teszt - A gomb szövege helyes

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//form//button"), (elem) => {
    return elem != null && elem.textContent.trim() === "Időpont foglalása";
}, "A gomb szövege 'Időpont foglalása'.");

// 15. teszt - A gomb osztályai helyesek

testBase(getElementByXpath("//div[@id='testResult']"), getElementByXpath("//form//button"), (elem) => {
    return elem != null &&
           elem.classList.contains("btn") &&
           elem.classList.contains("btn-warning") &&
           elem.getAttribute("name") === "book";
}, "A gomb btn és btn-warning osztályú, neve pedig book.");