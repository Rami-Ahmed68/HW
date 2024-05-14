let cont = document.querySelector(".container");
let addBtn = document.querySelector(".add");
let form = document.querySelector(".user-data-form");
let closeForm = document.querySelector(".close-form");
let sendBTN = document.querySelector(".send");
let overCont = document.querySelector(".over");
let selectedHous;
let sound = document.getElementById("success");
let overbtn = document.querySelector(".overbtn");

let nameInput = document.getElementById("name");
let IdInput = document.getElementById("id");
let numberInput = document.getElementById("number");
let dateInput = document.getElementById("date");
let emailINput = document.getElementById("email");
let capInput = document.getElementById("cap");
let inputDate = document.getElementById('date');

let check = false;

let Data = [
    {
        "id" : 134324,
        "city" : "حلب",
        "slary" : 50000,
        "description" : "شقة كبيرة بعيد عن ضجيج لسيارات",
        "Info" : {
            "location" : "هنانو",
            "car_parking" : true,
            "Floor" : 3,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : true,
            "images" : "../images/33.jpg"
        }
    },
    {
        "id" : 134333,
        "city" : "دمشق",
        "slary" : 120000,
        "description" : "شقة صغيرة في منتصف العاصمة",
        "Info" : {
            "location" : "ركن الدين",
            "car_parking" : true,
            "Floor" : 5,
            "Property" : "طابو اخضر",
            "Balcony" : false,
            "Furnished" : true,
            "images" : "../images/44.jpg"
        }
    },
    {
        "id" : 136724,
        "city" : "اللاذقية",
        "slary" : 70000,
        "description" : "السمرا منزل ريفي",
        "Info" : {
            "location" : "ساحة السمرا",
            "car_parking" : false,
            "Floor" : 7,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : true,
            "images" : "../images/2.jpg"
        }
    },
    {
        "id" : 124321,
        "city" : "حمص",
        "slary" : 50000,
        "description" : "منزل متوسط الحجم",
        "Info" : {
            "location" : "test",
            "car_parking" : true,
            "Floor" : 1,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : false,
            "images" : "../images/23.jpg"
        }
    },
    {
        "id" : 234324,
        "city" : "دمشق",
        "slary" : 50000,
        "description" : "منزلمتوط الحجم في ريف دمشق",
        "Info" : {
            "location" : "التل",
            "car_parking" : true,
            "Floor" : 2,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : false,
            "images" : "../images/45.jpg"
        }
    },
    {
        "id" : 114324,
        "city" : "حماة",
        "slary" : 80000,
        "description" : "منزل كبير بناء جديد",
        "Info" : {
            "location" : "مصياف",
            "car_parking" : true,
            "Floor" : 3,
            "Property" : "طابو اخضر",
            "Balcony" : false,
            "Furnished" : true,
            "images" : "../images/download.jpg"
        }
    },
    {
        "id" : 134359,
        "city" : "الرقة",
        "slary" : 50000,
        "description" : "شقة صغيرةالحجم لشخصين",
        "Info" : {
            "location" : "الفرات",
            "car_parking" : true,
            "Floor" : 3,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : true,
            "images" : "../images/2.jpg"
        }
    },
    {
        "id" : 121524,
        "city" : "درعا",
        "slary" : 60000,
        "description" : "منزل جيد مساحة متوسطة",
        "Info" : {
            "location" : "المدينةالجامعية",
            "car_parking" : true,
            "Floor" : 8,
            "Property" : "طابو اخضر",
            "Balcony" : false,
            "Furnished" : true,
            "images" : "../images/ثق.jpg"
        }
    },
    {
        "id" : 535427,
        "city" : "طرطوس",
        "slary" : 50000,
        "description" : "منزل كبير الحجم عمار فاخر",
        "Info" : {
            "location" : "الفرقان",
            "car_parking" : true,
            "Floor" : 3,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : false,
            "images" : "../images/ss.jpg"
        }
    },
    {
        "id" : 53543027,
        "city" : "جلبة",
        "slary" : 100000,
        "description" : "منزل كبير الحجم عمار فاخر في منتصف الغابة",
        "Info" : {
            "location" : "الساحة",
            "car_parking" : true,
            "Floor" : 0,
            "Property" : "طابو اخضر",
            "Balcony" : true,
            "Furnished" : false,
            "images" : "../images/3ق3.jpg"
        }
    },
    {
        "id" : 15351427,
        "city" : "الرقة",
        "slary" : 45000,
        "description" : "منزل جيد متوسط الحجم",
        "Info" : {
            "location" : "الارض السعيدة",
            "car_parking" : false,
            "Floor" : 3,
            "Property" : "طابو اخضر",
            "Balcony" : false,
            "Furnished" : true,
            "images" : "../images/1306745_0.jpg"
        }
    },
    {
        "id" : 05351420,
        "city" : "تدمر",
        "slary" : 45000,
        "description" : "منزل جميل سوبر ديلوكس",
        "Info" : {
            "location" : "الآثار",
            "car_parking" : false,
            "Floor" : 7,
            "Property" : "طابو اخضر",
            "Balcony" : false,
            "Furnished" : false,
            "images" : "../images/467.jpg"
        }
    }
]

let dataform = document.querySelector(".data");
let close = document.querySelector(".close");


Data.forEach(ele => {

    let div = document.createElement("div")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    div.classList.add("house");
    div.setAttribute("data-id" , ele.id)

    img.setAttribute("src" , ele.Info.images)
    h4.innerHTML = ele.description,
    p1.innerHTML = ` المدينة : ${ele.city}`
    p2.innerHTML = ` الإيجار : ${ele.slary}`
    p3.innerHTML = `الموقع : ${ele.Info.location}`

    div.append(
        img,
        h4,
        p1,
        p2,
        p3
    )

    cont.append(div)
});

let houses = document.querySelectorAll(".container .house");

houses.forEach(ele => {
    ele.onclick = function() {
        dataform.style.display = "flex";
        selectedHous = ele.dataset.id
        getHous(ele.dataset.id);
    }
});

close.onclick = function () {
    dataform.style.display = "none"
}

function getHous(id) {
    let houdata = Data.filter(ele => ele.id == id);
    dataform.children[1].src = houdata[0].Info.images;
    dataform.children[2].innerHTML = houdata[0].description;
    dataform.children[3].innerHTML = `المدينة : ${houdata[0].city}`;
    dataform.children[4].innerHTML = `الإجار : ${houdata[0].slary}`;
    dataform.children[5].innerHTML = `الطابق : ${houdata[0].Info.Floor}`;
    dataform.children[6].innerHTML = `الملكية : ${houdata[0].Info.Property}`;
    dataform.children[7].innerHTML = `المنطقة : ${houdata[0].Info.location}`;
    dataform.children[8].innerHTML = `بلكون : ${houdata[0].Info.Balcony === true ? 'يوجد' : 'لا يوجد'}`;
    dataform.children[9].innerHTML = `فرش : ${houdata[0].Info.Furnished === true ? 'يوجد' : 'لا يوجد'}`;
    dataform.children[10].innerHTML = `كراج : ${houdata[0].Info.car_parking === true ? 'يوجد' : 'لا يوجد'}`;
}

addBtn.onclick = function() {
    form.classList.toggle("open");
    Captcha()
}

closeForm.onclick = function() {
    form.classList.remove("open");
    dataform.style.display = "none"
}

sendBTN.addEventListener('click', function(event) {
    event.preventDefault();
    validatedate();
    ValidateEmail();
    ValidateNumber();
    ValidCaptcha();
    validateId();
    GetOver();
    window.localStorage.setItem("userH" , JSON.stringify({
        name : nameInput.value,
        id : IdInput.value,
        phone : numberInput.value,
        date : dateInput.value,
        email : emailINput.value,
        hous : selectedHous
    }));
    addDataToOver();
    form.classList.toggle = "open";
    check = false;
    emptyingInputs();
});

function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.querySelector(".captcha").innerHTML = code;
}

function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('cap').value);
    var string2 = removeSpaces(document.getElementById('para').textContent);
    if (string1 == string2){
        check = true;
        return true;
    }else{
        alert("خطأ في كتابة الكابتشات");
        Captcha();
        check = false;
        return false;
    }
}

function validateId() {
    if (IdInput.value.length > 11) {
        check = false;
        alert("خطأ في الرقم الوطني يجب ان يكون أقل او يساوي 11  خانة");
    }
}

function validatedate() {
    if (inputDate.value != "") {
        if (new Date(inputDate.value).getFullYear() < 1950 || new Date(inputDate.value).getFullYear() > new Date().getFullYear()) {
            check = false;
            alert('التاريخ المدخل غير صحيح. يجب أن يكون بين 1950 و 2024.');
        }
    }
}

function GetOver() {
    if (IdInput.value != "" && check == true) {
        overCont.id = ("over-open");
        sound.play();
        dataform.style.display = "none";
    } 
}

function removeSpaces(string){
    return string.split(' ').join('');
}

function ValidateEmail() {
    if (emailINput.value != "") {
        let val = /\w+\d?@(\w+|\d)?gmail.(com|org|net|shope|online|ai|io)/gi;
        if (!val.test(emailINput.value)) {
            check = false;
            alert("خطأ في كتابة الايميل يجب ان يكون ايميل صحيح")
        }
    }
}

function ValidateNumber() {
    if (numberInput.value) {
        let val = /(095|098)\d{7}/g;
        if (!val.test(numberInput.value)) {
            check = false;
            alert("خطأ في صيغة الرقم يجب ان يبدأ بي 095  أو 098")
        }
    }
}

function emptyingInputs() {
    IdInput.value = "";
    nameInput.value = "";
    numberInput.value = "";
    dateInput.value = "";
    emailINput.value = "";
    capInput.value = "";
}

function addDataToOver() {
    let userData = JSON.parse(window.localStorage.getItem("userH"));
    overCont.children[3].innerHTML = `${userData.name} : الاسم`;
    overCont.children[4].innerHTML = ` مواليد : ${userData.date != "" ? userData.date : 'لم يحدد'}`;
    overCont.children[5].innerHTML = ` الرقم الوطني : ${userData.id}`;
    overCont.children[6].innerHTML = ` رقم الهاتف : ${userData.phone}`;
    overCont.children[7].innerHTML = ` ${userData.email} : الإيميل `;

    Data.forEach(ele => {
        if (ele.id == userData.hous) {
            overCont.children[9].innerHTML = `الوصف : ${ele.description}`
            overCont.children[10].innerHTML = `المحافظة : ${ele.city}`
            overCont.children[11].innerHTML = `السعر : ${ele.slary}`
            overCont.children[12].innerHTML = `الملكية : ${ele.Info.Property}`
            overCont.children[13].innerHTML = `الطابق : ${ele.Info.Floor}`
            overCont.children[14].innerHTML = ` بلكون : ${ele.Info.Balcony ? 'يوجد' : 'لايوجد'}`
            overCont.children[15].innerHTML = ` كراج : ${ele.Info.car_parking ? 'يوجد' : 'لايوجد'}`
            overCont.children[16].innerHTML = ` فرش : ${ele.Info.Furnished ? 'يوجد' : 'لايوجد'}`
            overCont.children[17].innerHTML = ` المنطقة : ${ele.Info.location}`
        }
    })
}

overbtn.onclick = function () {
    console.log("clicked ...")
    overCont.id = ("");
}