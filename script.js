let a, b, c, d, e, z;

document.getElementById("d1").onclick = function () {
    a = parseFloat(document.getElementById("COA").value);
    b = parseFloat(document.getElementById("DSA").value);
    c = parseFloat(document.getElementById("WEB").value);
    d = parseFloat(document.getElementById("DMS").value);
    e = parseFloat(document.getElementById("PDC").value);

    z = (a + b + c + d + e) / 50 * 10;

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
        document.getElementById("demo").textContent = "Enter all the required fields";
    } else {
        if (z <= 10 && z > 9) document.getElementById("demo").textContent = `Your GPA is ${z} and grade is A+`;
        else if (z <= 9 && z > 8) document.getElementById("demo").textContent = `Your GPA is ${z} and grade is A`;
        else if (z <= 8 && z > 7) document.getElementById("demo").textContent = `Your GPA is ${z} and grade is B+`;
        else if (z <= 7 && z > 6) document.getElementById("demo").textContent = `Your GPA is ${z} and grade is B`;
        else if (z <= 6 && z > 5) document.getElementById("demo").textContent = `Your GPA is ${z} and grade is C`;
        else {
            document.getElementById("demo").textContent = "You failed the overall";
        }
    }
};
