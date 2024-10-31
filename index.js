// String methodlari

const str = "Hello"
const str2 = "HELLO"
// const stringLength = str.length

// const charAtIndex = str.charAt(0)
// const charAtIndex = str.at(0)
// const charAtIndex = str[0]
// const charCodeAtIndex = str.charCodeAt(0)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13); // Banana
// let strToEnd = text.slice(7) // Banana, Kiwi  Ikinci reqem yazilmadiqda, baslangic indexden sona qeder olan hisseni qaytarir
// let part2 = text.slice(-4); Ters istiqametde istifade etmek ucun
// let part1 = str.substring(7, 13); Yalniz 0dan boyuk indexlerle isleyir
// let part3 = str.substr(0,5); Verilen indexden uzunlugu ikinci reqem qeder olan stringi goturur

// const upperCaseTxt = str.toUpperCase() Kicik herfleri boyuk herfle evez edir
// const lowerCaseTxt = str2.toLowerCase() Boyuk herfleri kicik herfle evez edir


let text1 = "Hello";
let text2 = "World";
// let text3 = text1.concat(" ", text2); Stringleri birlesdirmek ucun istifade olunur
// let text3 = text1 + " " + text2

// console.log(text3)

let txtWithWhitespace = "    HELLO     "
// let editedText = txtWithWhitespace.trim() Bosluqlari (whitespace) silmek ucun istifade olunur

// const txt = text1.padStart(12," "); Verilmis texti ikinci argumentdeki characterle birinci argumentde verilen uzunluga tamamlayir
// padStart characterleri sola, padEnd sag hisseye elave edir

// let result = text1.repeat(2); Texti verilmis reqem sayi qeder tekrar edir

let cumle = "Please visit Microsoft and Microsoft";
// let newText = cumle.replace("Microsoft", "Google"); // Birinci texti ikinci textle evez edir
// let newText = cumle.replaceAll("Microsoft", "Google"); // Birinci texte beraber olan butun stringleri ikinci textle evez edir
// let newText = cumle.replace(/Microsoft/g, "Google"); // Birinci texti ikinci textle evez edir
// console.log(newText)

let text = "Apple,Banana,Kiwi";
// const fruitsArr = text.split(",") Stringdeki sozlerden ibaret array duzeltmek ucun istifade olunur, methoda oturulen charactere esasen bolur

// console.log(text.split("")) methoda bos string oturdukde sozleri herflerine ayirir

// console.log(text.includes("Apple")) String daxilinde methoda oturulen valuenu axtarir, tapdiqda true, tapmasa false qaytarir

// ================================================================================================================================================================================================

// Number Methodlari

// let x = 123;
// console.log(typeof x)
// const strX = x.toString();
// console.log(typeof strX)

let x = 9.656;
// console.log(x.toFixed(0)) // float ededi integere cevirir
// console.log(x.toFixed(2)) // verilmis ededin float hissesini 2ci indexe qeder saxlayir, yuvarlaqlasdirir
// console.log(x.toFixed(6)) // ededin float hissesine sifirlar elave edir

// console.log(x.toPrecision(2)) // ededi methoda oturulen uzunluqda edir ve yuvarlaqlasdirir

let a = "123.6432"

// console.log(Number(a)) // Stringi numbera cevirir, eger string numbera cevrile bilmirse NaN qaytarir

// console.log(parseFloat(a) - parseFloat(a)) // Float hisseni qaytarmaq ucun

