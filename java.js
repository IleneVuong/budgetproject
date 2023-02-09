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
let grossAnnual = 0;
let gmi =0;
let career = e.options[e.selectedIndex].text;
e.addEventListener('change', setIncome);
    

function setIncome(){
    grossAnnual = e.value;
    // document.getElementById("gr").innerHTML = filter(career);
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
let mmhp = 0;

function divide() {
    gmi = Math.round(grossAnnual/12);
    document.getElementById("monthly").innerHTML = gmi;
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
    let nmi = gmi - td;
    document.getElementById("nmi-out").innerHTML = nmi; 
    document.getElementById("gmi").innerHTML = gmi; 
}

let t = document.getElementById("houseButton");
t.addEventListener('click', housePayment);

function housePayment() {
    mmhp = Math.round(gmi * 0.33);
    document.getElementById("paymentNumber").innerHTML = mmhp;
    return mmhp;
}

function reset() {
    mmhp = 0;
    document.getElementById("paymentNumber").innerHTML = mmhp;
}

t.addEventListener("click",taxes);