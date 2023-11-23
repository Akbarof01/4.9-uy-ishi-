// Foydalanuvchidan gapni olish
//const userInput = prompt("Iltimos, bir gap kiriting:");

// Gapni so'zlar bo'yicha ajratish
//function countWords(sentence) {
  // Gapni bo'sh joylar orqali ajratib, bo'sh so'zlarni olib tashlash
//  const wordsArray = sentence.trim().split(/\s+/);
  
  // Bo'sh so'zlarni hisobdan o'tkazib, so'zlar sonini topish
//  const numberOfWords = wordsArray.filter(word => word !== '').length;
  
//  return numberOfWords;
//}

// Foydalanuvchidan kelgan gapni so'zlar soni bilan ekranga chiqarish
//if (userInput !== null) {
//  const wordCount = countWords(userInput);
//  alert(`Siz kiritgan gapda ${wordCount} ta so'z mavjud.`);
//} else {
//  alert('Siz hech nima kiritmadingiz.');
//}

//50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
//mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
//yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
//bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
//funksiya true qaytarsin aks holda false.
//function kinogaKirish(yosh, otaOna) {
//  if (yosh >= 15 && otaOna) {
//      return true;
//  } else {
//      return false;
//  }
//}

//console.log(kinogaKirish(15, true));  
//console.log(kinogaKirish(14, false)); 
//console.log(kinogaKirish(16, true)); 

//51.Quyidagi namunalarda kamchilik bor funksiya aslida har
//bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
//yasang.
//function oshir1ga(arr) {
//  return arr.map(function(element) {
//      return element + 1;
//  });
//}

//console.log(oshir1ga([0, 1, 2, 3]));     // [1, 2, 3, 4]
//console.log(oshir1ga([2, 4, 6, 8]));     // [3, 5, 7, 9]
//console.log(oshir1ga([-1, -2, -3, -4])); // [0, -1, -2, -3]

//52.Template string yordamida ya’ni backticlar orqali “ ushbu
//formatdagi stringni hosil qiling.
//var ism = "Abdulaziz";
//var familiya = "Akbarov";
//var natija = `${ism} ${familiya}`;

//console.log(natija); // "Abdulaziz Akbarov"

//53.Quyidagi namunani ternary operator ko’rinishida yozing.
//Ternary operatorga misol:

//var holatiYaxshimi = true;
//var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";

//console.log(holati); // "yaxshi"

//54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
//juft bo’lsa funksiya true qaytarsin, aks holda false
//function sozUzunligi(str) {
//  return str.length % 2 === 0; // Agar uzunlik juft bo'lsa, true, aks holda false qaytaradi
//}

//console.log(sozUzunligi("apples")); // true
//console.log(sozUzunligi("pears")); // false
//console.log(sozUzunligi("cherry")); // true

//55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
//son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
//qaytarsin.
//function daraja(x, y) {
//  return Math.pow(x, y); // Math.pow() metodi x ning y-darajasini hisoblaydi
//}

//console.log(daraja(5, 5)); // 3125
//console.log(daraja(10, 10)); // 10000000000
//console.log(daraja(3, 3)); // 27

//56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
//so’nggi elementini qaytarib bersin.
//function songiElement(arr) {
//  return arr[arr.length - 2]; // Massivning so'nggi elementini qaytaradi
//}

//console.log(songiElement([1, 2, 3])); // 3
//console.log(songiElement(["cat", "dog", "duck"])); // "duck"
//console.log(songiElement([true, false, true])); // true

//57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
//yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
//yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
//400ga ham bo’linganidagina kabisa hisoblanadi.
//function kabisa(yil) {
//  if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//      return true; 
//  } else {
//      return false; 
//  }
//}

//console.log(kabisa(2020)); 
//console.log(kabisa(2021)); 
//console.log(kabisa(1968)); 

//58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
//harfisiz qaytarib bersin.
//function soz(word) {
//  return word.slice(1); // So'zning birinchi harfini olib tashlab qolgan so'zni qaytaradi
//}

//console.log(soz("apple")); // "pple"
//console.log(soz("cherry")); // "herry"
//console.log(soz("plum")); // "lum"

//59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang
//function teskariBool(bool) {
//  return !bool; // Boolean qiymatning teskari qiymatini qaytaradi
//}

//console.log(teskariBool(true)); // false
//console.log(teskariBool(false)); // true

//60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
//qaytaradi, agar toq bo’lsa “toq” qaytarsin.
//function juftMiToqmi(son) {
//  if (son % 2 === 0) {
//      return "juft"; // Agar son juft bo'lsa "juft" qaytaradi
//  } else {
//      return "toq"; // Agar son toq bo'lsa "toq" qaytaradi
//  }
//}

//console.log(juftMiToqmi(6)); // "toq"
//console.log(juftMiToqmi(147)); // "juft"
//console.log(juftMiToqmi(18)); // "toq"

//Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
//qavatiga qarab ularning soni oshib boradi.
//Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
//qaytarsin.
//function qutilar(qavat) {
//  return qavat ** 2; // Qutilarning sonini hisoblash uchun qavatni darajaga oshiradi
//}

//console.log(qutilar(1)); 
//console.log(qutilar(2)); 
//console.log(qutilar(0)); 

//62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
//stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
//elementlarini bitta string qilib qaytarsin.
//function arrayToString(arr) {
//  return arr.join(''); // Massiv elementlarini bitta stringga aylantiradi
//}

//console.log(arrayToString([1, 2, 3, 4, 5, 6])); 
//console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); 
//console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); 

//63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
//birlashtirib bitta massiv ko’rinishida qaytarib bersin.
//function birlash(arr1, arr2) {
//  return arr1.concat(arr2); // Massivlarni birlashtirish
//}

//console.log(birlash([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
//console.log(birlash([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]
//console.log(birlash([4, 5], [])); // [4, 5]

//64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
//2-argument ushbu massivning biron elementi. Funksiya ushbu
//elementning massiv ichida nechinchi indexda turishini qaytarib
//bersin.
//function topIndex(arr, str) {
//  return arr.indexOf(str); // Elementning massiv ichidagi indeksini qaytaradi
//}

//console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh")); 
//console.log(topIndex(["Red", "blue", "Blue", "Green"], "blue")); 
//console.log(topIndex(["a", "g", "y", "d"], "d")); // 3
//console.log(topIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); 

//65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
//massiv elementini qaytarsin.
//!!! Indexni eng kichik qiymatga qarab yaxlitlang.
//function arrElement(arr, index) {
//  index = Math.floor(index); // Indeksni eng kichik butun son qilish

//  if (index < 0) {
//      return arr[0]; // Agar indeks manfiy bo'lsa, massivning birinchi elementini qaytaradi
//  } else if (index >= arr.length) {
//      return arr[arr.length - 1]; // Agar indeks massiv uzunligidan katta yoki teng bo'lsa, massivning oxirgi elementini qaytaradi
//  } else {
//      return arr[index]; // Agar indeks massivning chegaralarida bo'lsa, ushbu indeksdagi elementni qaytaradi
//  }
//}

//console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2)); // 6
//console.log(arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2)); // 5
//console.log(arrElement([1, 2, 3, 4], 6.535355314 / 2)); // 4

//66.Quyidagi namunani kuzatgan holda funksiya yasang.
//function namuna(arr) {
//  return arr.reduce((acc, curr) => acc + curr, 0); // Massivdagi elementlarning yig'indisini hisoblaydi
//}

//console.log(namuna([1, 2, 3, 4, 5])); 
//console.log(namuna([-1, 0, 1])); 
//console.log(namuna([0, 4, 8, 12])); 

//67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida qaytarilsin
//function sozSon(soz) {
//  const raqamlar = {
//      "bir": 1,
//      "ikki": 2,
//      "uch": 3,
//      "to'rt": 4,
//      "besh": 5,
//      "olti": 6,
//      "yetti": 7,
//      "sakkiz": 8,
//      "to'qqiz": 9,
//      "nol": 0
//  };

//  return raqamlar[soz] || -1; 
//}

//console.log(sozSon("bir")); 
//console.log(sozSon("ikki")); 
//console.log(sozSon("uch")); 
//console.log(sozSon("to'rt")); 
//console.log(sozSon("besh")); 
//console.log(sozSon("olti")); 
//console.log(sozSon("yetti")); 
//console.log(sozSon("sakkiz")); 
//console.log(sozSon("to'qqiz")); 
//console.log(sozSon("nol")); 
//console.log(sozSon("salom")); 

//68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
//bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
//true qaytarsin, aks holda false

///function bormi(arr, son) {
///  return arr.some(item => item === son); // Berilgan son massivda bo'lsa true, aks holda false qaytaradi
///}

///console.log(bormi([1, 2, 3, 4, 5], 3)); 
///console.log(bormi([1, 1, 2, 1, 1], 3)); 
///console.log(bormi([5, 5, 5, 6], 5)); 
///console.log(bormi([], 5)); 

//69.Funskiya sonlar va stringlar massivi berilsa, massivning
//ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
//qaytarib bersin.
//function sonString(arr) {
//  return arr.map(item => String(item)); // Massiv elementlarini stringga o'girib beradi
//}

//console.log(sonString([1, 2, "a", "b"])); // ["1", "2", "a", "b"]
//console.log(sonString(["abc", 123, "def", 456])); // ["abc", "123", "def", "456"]
//console.log(sonString([1, 2, 3, 17, 24, 3, "a", "123b"])); // ["1", "2", "3", "17", "24", "3", "a", "123b"]
//console.log(sonString([])); // []
//70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
//Funksiya kubik rubikni necha qatorligiga qarab turib,
//kubikchalar sonini qaytasin.
//function kubikchalar(n) {
//  return 6 * Math.pow(n, 2); // Kubik Rubik qatorlarining sonini hisoblash
//}

//console.log(kubikchalar(1)); // 6
//console.log(kubikchalar(2)); // 24
//console.log(kubikchalar(3)); // 54

//71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
//olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
//odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
//kerakligini qaytarsin.
//function sayohat(odamlar) {
//  if (odamlar === 0) {
//      return 0; // Agar odamlar soni 0 bo'lsa, avtomobil kerak emas
//  } else if (odamlar <= 4) {
//      return 1; // Agar odamlar soni 4 yoki undan kam bo'lsa, bir avtomobil yetarli
//  } else {
//      return Math.ceil((odamlar - 1) / 4); // Aks holda, odamlar sonidan 1 ni ayrib, qolganini 4 ga bo'lib yuqoriya yaxlitlaymiz
//  }
//}

//console.log(sayohat(5)); // 1
//console.log(sayohat(11)); // 3
//console.log(sayohat(0)); // 0

//72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
//mavjud bo’lsa true qaytarsin, aks holda false.
//function boshJoy(str) {
//  return str.trim() === ''; // Agar berilgan stringda bo'sh joy mavjud bo'lsa true, aks holda false
//}

//console.log(boshJoy("hello")); 
//console.log(boshJoy("hello, world")); 
//console.log(boshJoy(" ")); 
//console.log(boshJoy("")); 
//console.log(boshJoy(",./!@#")); 


//73.Funksiya biron qutining olchamlari ma’lumotlarini object
//sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
//bersin. Hajm = Balandlik * Eni * Uzunlik
//function hajm(quti) {
//  return quti.width * quti.length * quti.height; // Hajm = Balandlik * Eni * Uzunlik
//}

//console.log(hajm({ width: 2, length: 5, height: 1 })); // 10
//console.log(hajm({ width: 4, length: 2, height: 2 })); // 16
//console.log(hajm({ width: 2, length: 3, height: 5 })); // 30

//74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
//massivni ichidan son1dan katta va son2dan kichik sonlarni
//ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
//kichik.
//function sonlar(son1, son2, arr) {
//  return arr.filter(item => item > son1 && item < son2); // Massivni son1 dan katta va son2 dan kichik sonlarni ajratadi
//}

//console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7])); // [5, 4, 7]
//console.log(sonlar(1, 10, [1, 10, 25, 8, 11, 6])); // [8, 6]
//console.log(sonlar(7, 32, [1, 2, 3, 78])); // []

//75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
//massiv elementlariga mos o’rinda joylashgan elementlarning
//turini saqlagan massiv qaytarsin.
//function turlar(arr) {
//  return arr.map(item => typeof item); // Massiv elementlarining turini aniqlaydi
//}

//console.log(turlar([1, 2, "null", []])); // ["number", "number", "string", "object"]
//console.log(turlar(["214", true, false, 2, 2.15, [], null])); // ["string", "boolean", "boolean", "number", "number", "object", "object"]
//console.log(turlar([21.1, "float", "array", ["I am array"], null, true, 214])); // ["number", "string", "string", "object", "object", "boolean", "number"]

//76.Funskiya string va number qabul qiladi. Funksiya ushbu
//stringni berilgan son miqdoricha qayta-qayta yozib natijani
//string ko’rinishida qaytarsin
//function qaytarString(str, miqdor) {
//  if (typeof str !== 'string') {
//      return "Not A String !!"; 
//  }

//  let result = '';
//  for (let i = 0; i < miqdor; i++) {
//      result += str; 
//  }
//  return result;
//}

//console.log(qaytarString("Mubashir", 2)); 
//console.log(qaytarString("Matt", 3)); 
//console.log(qaytarString(1990, 7)); 

//77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
//funksiya true qaytarsin, aks holda false.
//function koplik(str) {
//  const vowels = ['a', 'e', 'i', 'o', 'u'];
//  const count = {}; 

//  for (let letter of str.toLowerCase()) {
//    if (vowels.includes(letter)) {
//      if (!count[letter]) {
//        count[letter] = 1;
//      } else {
//        count[letter]++;
//      }
//    }
//  }

 
//  for (let key in count) {
//    if (count[key] > 1) {
//      return true;
//    }
//  }

//  return false;
//}


//console.log(koplik("daraxtlar")); // true
//console.log(koplik("meva")); // false
//console.log(koplik("odamlar")); // true
//console.log(koplik("o'quvchi")); // false

//78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
//bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.
//function boshOxiri(str) {
//  if (str.length < 2) {
//    return str; // Agar string uzunligi 2 dan kichik bo'lsa, o'sha stringni qaytaradi
//  } else {
//    return str.charAt(0) + str.charAt(str.length - 1); // Bosh va oxirgi harflarni birlashtirib qaytaradi
//  }
//}

//console.log(boshOxiri("ganesh")); // "gh"
//console.log(boshOxiri("kali")); // "ki"
//console.log(boshOxiri("shiva")); // "sa"
//console.log(boshOxiri("vishnu")); // "vu"
//console.log(boshOxiri("durga")); // "da"


//79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
//qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
//boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
//Agar funksiya string kiritilsa xuddi shunday formatda string
//qaytarsin.
//function sozAytish(word) {
//  let initialPart = word.slice(0, 2) + '... '; // Boshida 2 ta harfni oladi va so'zning boshini ko'rsatadi
//  let repeatedPart = initialPart.repeat(2); // Boshida 2 marta qaytaradi

//  return repeatedPart + word; // Qiynalib talaffuz qilingan so'zni qaytaradi
//}

//console.log(sozAytish("incredible")); // "in... in... incredible"
//console.log(sozAytish("enthusiastic")); // "en... en... enthusiastic"
//console.log(sozAytish("outstanding")); // "ou... ou... outstanding"

//80.Quyidaga namunani kuzatgan holda funksiya yasang
//function ahvol(emotion = "neutral") {
//  return `Today, I am feeling ${emotion}`;
//}

//console.log(ahvol("happy")); 
//console.log(ahvol("sad"));
//console.log(ahvol()); 

