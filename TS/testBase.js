function getElementsByXpath(path) {
    let result = [];
    let query = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    for (let i = 0; i < query.snapshotLength; i++) {
        result.push(query.snapshotItem(i));
    }

    return result;
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
}

function getResultElement(success) {
    let p = document.createElement('p');
    p.style.marginTop = "0px";
    p.style.marginBottom = "0px";
    p.style.padding = "0px";
    p.style.borderBottom = "1px solid";

    if (success) {
        p.style.color = "green";
        p.style.backgroundColor = "#d4ffd1";
    } else {
        p.style.color = "red";
        p.style.backgroundColor = "#ffd1d1";
    }

    return p;
}

function testBase(resultContainer, testTarget, validator, message) {
    let resultElement = null;

    try {
        if (validator(testTarget)) {
            resultElement = getResultElement(true);
            resultElement.innerHTML += 'A teszt ("' + message + '") <u>sikeres</u>!';
            resultContainer.appendChild(resultElement);
        } else {
            resultElement = getResultElement(false);
            resultElement.innerHTML += 'A teszt ("' + message + '") <u>sikertelen</u>!';
            resultContainer.appendChild(resultElement);
        }
    } catch {
        resultElement = getResultElement(false);
        resultElement.innerHTML += 'A teszt ("' + message + '") <u>sikertelen</u>! Lefutási hiba, valószínűleg a hivatkozás nem található!';
        resultContainer.appendChild(resultElement);
    }
}