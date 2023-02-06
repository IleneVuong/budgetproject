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
    [ 'ComputerTechnician', 46200 ],
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
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nuse', 66150 ],
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
    
//    onEvent(getElementById("calculateGmi"), "click", function divideBy12() {

//    });

//    function filter() {
//     for (var i = 0; i < data[0].length; i++)
//         if (data)
//    }

    
//     function filter (career) {
//         var filteredPrice;
//         for (var i = 0; i < data.length; i++) {
//             if (data[i[0]] == career) {
//             appendItem(filteredPrice, data[i[1]]);
//         }
//         console.log(filteredPrice);
//     }
// }
// filter("Architect");
//    console.log(data[0]);


let careers = 
    ['Accountant',
     'Advance Tractor/Trailer Driver',
     'Agricultural Engineer',
     'Architect',
     'Auto Tech/Mechanic', 
     'Aviation Tech. Mechanic', 
     'Biologist', 
     'Bus Driver',
     'Business Development Officer',
     'Business Manager Hotel etc.', 
     'CNC Manufacturing', 
     'Carpenter', 
     'Chef',
     'Chemist',
     'Civil Engineering Technician', 
     'Commercial Driver', 
     'ComputerTechnician', 
     'Conserv./Environ. Science',
     'Correctional Officer', 
     'Cosmetologist', 
     'Credit Union/Bank Manager', 
     'Daycare Director', 
     'Dentist', 
     'Detective',
     'Diesel Tech/Mechanic', 
     'Doctor/Physician',
     'Electrician', 
     'Electronic Engineer', 
     'EMT', 
     'Energy Management PG&E', 
     'Engineer', 
     'Fashion Designer', 
     'Fire Fighter',
     'Forest Ranger', 
     'Graphic/Media Designer', 
     'H/C HVAC', 
     'Highway Patrol', 
     'Home Inspector', 
     'Industrial Mechanic', 
     'Interior Designer', 
     'Investment Analyst', 
     'Lab Technician', 
     'Landscaper Horticulture',
     'Lawyer', 
     'Marketing/Sales Manager',
     'Media/Communications', 
     'Medical RepairTech.',
     'Military', 
     'Nurse', 
     'Nutitionist', 
     'Oceanographer', 
     'Pastor', 
     'PGBEATT Technician',
     'Pharmacist', 
     'Photographer', 
     'Physical Therapist', 
     'Pilot Commercial',  
     'Plumber', 
     'Police Officer', 
     'Principal', 
     'Probation Officer', 
     'Psychologist', 
     'Retail Sales Associate', 
     'Social Worker', 
     'Solar Energy Tech.', 
     'Teacher',
     'UPS/Fed Ex Driver', 
     'Veterinarian',
     'Welder/Metal Specialist',
     'Wind EnergyTechnician'
];

let income = [
    55650,
    53550,
    56700,
    53550, 
    49350,
    50400,
    54600,
    37800,
    54600,
    61950,
    80850,
    47250,
    52500,
    56700,
    68250,
    51450,
    46200,
    72450,
    48300,
    36750,
    61950,
    37800,
    115500,
    60900, 
    55650, 
    147000,
    54600,
    75600,
    34650,
    106050,
    72450,
    63000,
    49350,
    52500,
    58800,
    63000,
    84000,
    56700,
    46200,
    49350,
    66150,
    42000,
    48300,
    86100,
    58800,
    45150,
    52500,
    55650,
    66150,
    45150,
    69300,
    50400,
    78750,
    105000,
    45150,
    72450,
    78750,
    52500,
    53550,
    93450,
    44100,
    77700,
    34650,
    50400,
    53550,
    52500,
    68250,
    82950,
    47250,
    56700 
];

var filteredIncome = [];
var a = [];
var gmi = [];
// var input = document.getElementsByClassName.innerHTML('careerInput');
function filter(input) {
    for (var i = 0; i < careers.length; i++) {
        if (careers[i] == input) {
            filteredIncome = income[i];
            console.log(filteredIncome);
            gmi = income[i]/12;
            console.log(Math.round(gmi));
            a = i;
            console.log(a);
        }
    }
}
filter ("Psychologist");


function taxes() {
    ft = Math.round(gmi * .12);
    st = Math.round(gmi * .07);
    ss = Math.round(gmi * 0.062);
    mc = Math.round(gmi * 0.0145);
    sd = Math.round(gmi * 0.01);
    ri = Math.round(gmi * 0.05);
    mi = 180
    td = ft + st + ss + mc + sd + ri + mi;
    nmi = gmi - td;
    console.log(ft, st, ss, mc, sd, ri, mi, td, nmi);
    return(nmi);
}
taxes();

function housePayment() {
    mmhp = Math.round(gmi * 0.33);
    console.log(mmhp);
}
housePayment();