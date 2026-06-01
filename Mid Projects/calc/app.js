const calc = document.querySelector(".calc .row");
const output = document.querySelector(".output");

calc.addEventListener("click" , (e) => {

    const val = e.target.innerHTML;

    if (e.target.tagName !== 'BUTTON') return;
    if (e.target.innerHTML === 'c' ){
        output.value = ""; 
        return;
    } 

    // من هنا مع مساعدة ال ai للتحسين

    if (val === '=') {
        try {
            // تنظيف النص المكتوب حالياً على الشاشة من العلامات المتكررة
            let safeEquation = output.value.replace(/[\+\-\*\/\.]+/g, (match) => match.slice(-1));
            // حساب الناتج بأمان
            output.value = new Function(`return ${safeEquation}`)();

        } catch (error) {
            output.value = "Error"; // إذا كانت المعادلة خاطئة رياضياً
        }
        return; // هامة جداً: تمنع الكود من النزول للأسفل وإضافة علامة = للشاشة
    }

    if (val === '.') {
        // تقسيم النص بناءً على العمليات الحسابية للحصول على الرقم الأخير الذي يُكتب حالياً
        const currentNumbers = output.value.split(/[\+\-\*\/]/);
        const lastNumber = currentNumbers[currentNumbers.length - 1];
        
        // إذا كان الرقم الأخير يحتوي بالفعل على نقطة، اخرج ولا تضف شيئاً
        if (lastNumber.includes('.')) {
            return; 
        }
    }

    output.value += val; 
    console.log(output.value)

    output.value = output.value.replace(/[\+\-\*\/]+/g, (match) => match.slice(-1));
    console.log(output.value)

});