let data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'Computer Technician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'awyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical Repair Tech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]
    

let e = document.getElementById('temp');
let career = e.options[e.selectedIndex].text;
e.addEventListener('change', setIncome);
let grossAnnual = 0;
let gmi = 0;

    

function setIncome() {
    grossAnnual = e.value;
    document.getElementById("gr").innerHTML = grossAnnual;
}

for(job of data){
    let newOption = document.createElement('option');
    newOption.setAttribute('value', job[1]);
    newOption.innerText = job[0];
    e.appendChild(newOption)
}

let g = document.getElementById("temp");
g.addEventListener('change', divide);
g.addEventListener('change', reset);
g.addEventListener('change', taxes);
let mmhp = 0;
let nmi;

function divide() {
    dollar = document.getElementById("dollar");
    gmi = Math.round(grossAnnual/12);
    document.getElementById("monthly").innerHTML = gmi;
    document.getElementById("monthly").style.paddingTop = "1vw";
    document.getElementById("monthly").style.paddingBottom = "1vw";
    dollar.style.fontSize = "4vw";
    dollar.style.position = "relative";
    dollar.style.top = ".5vw";
}

function taxes() {
    let ft = Math.round(gmi * .12);
    document.getElementById("ft-out").innerHTML = ft;
    let st = Math.round(gmi * .07);
    document.getElementById("st-out").innerHTML = st;
    let ss = Math.round(gmi * 0.062);
    document.getElementById("ss-out").innerHTML = ss;
    let mc = Math.round(gmi * 0.0145);
    document.getElementById("mc-out").innerHTML = mc;
    let sd = Math.round(gmi * 0.01);
    document.getElementById("sd-out").innerHTML = sd;
    let ri = Math.round(gmi * 0.05);
    document.getElementById("ri-out").innerHTML = ri;
    let mi = 180
    document.getElementById("mi-out").innerHTML = mi;
    let td = ft + st + ss + mc + sd + ri + mi;
    document.getElementById("td-out").innerHTML = td;
    document.getElementById("td-out2").innerHTML = td;
    nmi = gmi - td;
    document.getElementById("nmi-out").innerHTML = nmi; 
    document.getElementById("gmi").innerHTML = gmi; 
    document.getElementById("balance1").innerHTML = nmi;
    document.getElementById("plus1").innerHTML = nmi;
    document.getElementById("transaction1").innerHTML = "Paycheck";
}

let t = document.getElementById("houseButton");
t.addEventListener('click', housePayment);

function housePayment() {
    mmhp = Math.round(gmi * 0.33);
    document.getElementById("paymentNumber").innerHTML = mmhp;
    document.getElementById("paymentNumber").style.fontSize = "3vw";
    return mmhp;
}

function reset() {
    mmhp = 0;
    document.getElementById("paymentNumber").innerHTML = mmhp;
}

let calcBtn = document.getElementById("calc");
let calcBtn2 = document.getElementById("calc2");
let counter = 2;
calcBtn.addEventListener('click', test);
calcBtn2.addEventListener('click', test2);
let newTotal;
function test() {
    if(counter == 2) {
        let add = document.getElementById("plus2").value;
        newTotal = parseInt(add) + parseInt(nmi);
        document.getElementById("balance2").innerHTML = newTotal;
        

        document.getElementById("plus3").readOnly = false;
        document.getElementById("transaction3").readOnly = false;
        document.getElementById("withdrawal3").readOnly = false;
        document.getElementById("date3").readOnly = false;
         
        document.getElementById("plus2").readOnly = true;
        document.getElementById("transaction2").readOnly = true;
        document.getElementById("withdrawal2").readOnly = true;
        document.getElementById("date2").readOnly = true;
        counter = counter + 1;
    } else if(counter == 3) {
        add = document.getElementById("plus3").value; 
        newTotal = parseInt(add) + newTotal;
        document.getElementById("balance3").innerHTML = newTotal;

        document.getElementById("plus4").readOnly = false;
        document.getElementById("transaction4").readOnly = false;
        document.getElementById("withdrawal4").readOnly = false;
        document.getElementById("date4").readOnly = false;
         
        document.getElementById("plus3").readOnly = true;
        document.getElementById("transaction3").readOnly = true;
        document.getElementById("withdrawal3").readOnly = true;
        document.getElementById("date3").readOnly = true;
        counter = counter + 1;
    } else if(counter == 4) {
        add = document.getElementById("plus4").value; 
        newTotal = parseInt(add) + newTotal;
        document.getElementById("balance4").innerHTML = newTotal;

        document.getElementById("plus5").readOnly = false;
        document.getElementById("transaction5").readOnly = false;
        document.getElementById("withdrawal5").readOnly = false;
        document.getElementById("date5").readOnly = false;
         
        document.getElementById("plus4").readOnly = true;
        document.getElementById("transaction4").readOnly = true;
        document.getElementById("withdrawal4").readOnly = true;
        document.getElementById("date4").readOnly = true;
        counter = counter + 1;
    } else if(counter == 5) {
        add = document.getElementById("plus5").value; 
        newTotal = parseInt(add) + newTotal;
        document.getElementById("balance5").innerHTML = newTotal;

        document.getElementById("plus6").readOnly = false;
        document.getElementById("transaction6").readOnly = false;
        document.getElementById("withdrawal6").readOnly = false;
        document.getElementById("date6").readOnly = false;
         
        document.getElementById("plus5").readOnly = true;
        document.getElementById("transaction5").readOnly = true;
        document.getElementById("withdrawal5").readOnly = true;
        document.getElementById("date5").readOnly = true;
        counter = counter + 1;
    } else if(counter == 6) {
        add = document.getElementById("plus6").value; 
        newTotal = parseInt(add) + newTotal;
        document.getElementById("balance6").innerHTML = newTotal;

        document.getElementById("plus7").readOnly = false;
        document.getElementById("transaction7").readOnly = false;
        document.getElementById("withdrawal7").readOnly = false;
        document.getElementById("date7").readOnly = false;
         
        document.getElementById("plus6").readOnly = true;
        document.getElementById("transaction6").readOnly = true;
        document.getElementById("withdrawal6").readOnly = true;
        document.getElementById("date6").readOnly = true;
        counter = counter + 1;
    }
}

function test2() {
    if(counter == 2) {
        let sub = document.getElementById("withdrawal2").value;
        newTotal = parseInt(nmi) - parseInt(sub);
        document.getElementById("balance2").innerHTML = newTotal;
        
        document.getElementById("plus3").readOnly = false;
        document.getElementById("transaction3").readOnly = false;
        document.getElementById("withdrawal3").readOnly = false;
        document.getElementById("date3").readOnly = false;
         
        document.getElementById("plus2").readOnly = true;
        document.getElementById("transaction2").readOnly = true;
        document.getElementById("withdrawal2").readOnly = true;
        document.getElementById("date2").readOnly = true;
        counter = counter + 1;
    } else if(counter == 3) {
        sub = document.getElementById("withdrawal3").value;
        newTotal = newTotal - parseInt(sub);
        document.getElementById("balance3").innerHTML = newTotal;

        document.getElementById("plus4").readOnly = false;
        document.getElementById("transaction4").readOnly = false;
        document.getElementById("withdrawal4").readOnly = false;
        document.getElementById("date4").readOnly = false;
         
        document.getElementById("plus3").readOnly = true;
        document.getElementById("transaction3").readOnly = true;
        document.getElementById("withdrawal3").readOnly = true;
        document.getElementById("date3").readOnly = true;
        counter = counter + 1;
    } else if(counter == 4) {
        sub = document.getElementById("withdrawal4").value;
        newTotal = newTotal - parseInt(sub);
        document.getElementById("balance4").innerHTML = newTotal;

        document.getElementById("plus5").readOnly = false;
        document.getElementById("transaction5").readOnly = false;
        document.getElementById("withdrawal5").readOnly = false;
        document.getElementById("date5").readOnly = false;
         
        document.getElementById("plus4").readOnly = true;
        document.getElementById("transaction4").readOnly = true;
        document.getElementById("withdrawal4").readOnly = true;
        document.getElementById("date4").readOnly = true;
        counter = counter + 1;
    } else if(counter == 5) {
        sub = document.getElementById("withdrawal5").value;
        newTotal = newTotal - parseInt(sub);
        document.getElementById("balance5").innerHTML = newTotal;

        document.getElementById("plus6").readOnly = false;
        document.getElementById("transaction6").readOnly = false;
        document.getElementById("withdrawal6").readOnly = false;
        document.getElementById("date6").readOnly = false;
         
        document.getElementById("plus5").readOnly = true;
        document.getElementById("transaction5").readOnly = true;
        document.getElementById("withdrawal5").readOnly = true;
        document.getElementById("date5").readOnly = true;
        counter = counter + 1;
    } else if(counter == 6) {
        sub = document.getElementById("withdrawal6").value;
        newTotal = newTotal - parseInt(sub);
        document.getElementById("balance6").innerHTML = newTotal;

        document.getElementById("plus7").readOnly = false;
        document.getElementById("transaction7").readOnly = false;
        document.getElementById("withdrawal7").readOnly = false;
        document.getElementById("date7").readOnly = false;
         
        document.getElementById("plus6").readOnly = true;
        document.getElementById("transaction6").readOnly = true;
        document.getElementById("withdrawal6").readOnly = true;
        document.getElementById("date6").readOnly = true;
        counter = counter + 1;
    } 
}

// let w = document.getElementsByClassName("down-arrow");
// w.addEventListener("click", scroll());

// function scroll() {

// }