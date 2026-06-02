const year = document.querySelector(".year");
const day = document.querySelector(".numDay");
const hour = document.querySelector(".numHours");
const mint = document.querySelector(".numMin");
const sacand = document.querySelector(".numSac");

const currentYear = new Date().getFullYear();
const targetDate = new Date(`December 31, ${currentYear} 23:59:59`).getTime();

year.textContent = currentYear;

const formatNumber = num => String(num).padStart(2, '0');

updateNow();

function updateNow() {
    
    const now = new Date().getTime();
    const difference = targetDate - now;

    // console.log(now , currentYear)

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log()

    day.textContent = formatNumber(days);
    hour.textContent = formatNumber(hours);
    mint.textContent = formatNumber(minutes);
    sacand.textContent = formatNumber(seconds);

    requestAnimationFrame(updateNow);

}

requestAnimationFrame(updateNow);

// const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric'
// }).format(dateYear);

// console.log(hijriDate);

// const arabicDate = new Intl.DateTimeFormat('ar-EG', {
//   weekday: 'long', // اسم اليوم (الجمعة)
//   day: 'numeric',  // رقم اليوم
//   month: 'long',   // اسم الشهر بالعربي
//   year: 'numeric'  // السنة
// }).format(dateYear);

// console.log(arabicDate);

// تم مع ال ai 