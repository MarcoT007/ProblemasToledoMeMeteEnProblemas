function costOfHotel(){
    let howManyDays=parseFloat(document.getElementById("howManyDays").value);
    let costPerDay=parseFloat(document.getElementById("costPerDay").value);
    const result=(howManyDays*costPerDay);
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function areaTriangle(){
    let base=parseFloat(document.getElementById("base").value);
    let altura=parseFloat(document.getElementById("altura").value);
    const result=(base*altura)/2;
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function dlsAMxn(){
    let dolars=parseFloat(document.getElementById("dolars").value);
    let change=parseFloat(document.getElementById("change").value)
    const result=(dolars*change);
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function yearOldWithYearOfBirth(){
    let yearOfBirth=parseFloat(document.getElementById("yearOfBirth").value);
    let actualYear=parseFloat(document.getElementById("actualYear").value);
    const result=(actualYear-yearOfBirth);
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function ticketParking(){
    let costPerHour = parseFloat(document.getElementById("costPerHour").value);
    let hoursOfParking = Math.ceil(parseFloat(document.getElementById("howManyHours").value));

    const result = hoursOfParking * costPerHour;

    document.getElementById("result").textContent =
        "El resultado es: " + result;
};

function paintMetersSquared(){
    let costPerM=parseFloat(document.getElementById("costPerM").value);
    let howManyM=parseFloat(document.getElementById("howManyM").value);
    const result=(costPerM*howManyM);
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function pitagorasTheoreme(){
    let catetoA = parseFloat(document.getElementById("catetoA").value);
    let catetoB = parseFloat(document.getElementById("catetoB").value);

    const result = Math.sqrt(catetoA**2 + catetoB**2);

    document.getElementById("result").textContent =
        "El resultado es: " + result;
};

function travelOnBus(){
    let howManyKm=parseFloat(document.getElementById("howManyKm").value);
    let costPerKm=parseFloat(document.getElementById("costPerKm").value);
    const result=(costPerKm*howManyKm);
    document.getElementById("result").textContent = "El resultado es:" + result;
};

function travelOnBycicle(){
    let howManyKm=parseFloat(document.getElementById("howManyKm").value);
    let velocity=parseFloat(document.getElementById("velocity").value);
    const result=(howManyKm/velocity);
    document.getElementById("result").textContent = "El resultado es:" + result + "Horas";
};

function costOfCall(){
    let howManyMinutes=parseFloat(document.getElementById("howManyMinutes").value);
    let costPerMinute=parseFloat(document.getElementById("costPerMinute").value);
    const result=(howManyMinutes*costPerMinute);
    document.getElementById("result").textContent = "El resultado es:" + result;
};