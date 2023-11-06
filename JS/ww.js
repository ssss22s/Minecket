const fs = require('fs'); // يتيح لنا وحدة النظام الأساسي Node.js الوصول إلى نظام الملفات

// اقرأ البيانات من ملف JSON
function readUserData() {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // إذا لم يتم العثور على الملف أو حدث خطأ أثناء القراءة، سنعيد مصفوفة فارغة
        return [];
    }
}

// احفظ البيانات إلى ملف JSON
function saveUserData(users) {
    const data = JSON.stringify(users, null, 2); // null و 2 تجعل البيانات مقروءة بشكل أفضل
    fs.writeFileSync('data.json', data, 'utf-8');
}

// احصل على بيانات المستخدمين وقم بتحديثها
let userDatabase = readUserData();

// اضف البيانات الجديدة إلى قاعدة البيانات
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // قم بإضافة المستخدم الجديد إلى قاعدة البيانات
    userDatabase.push({ username: newUsername, password: newPassword });

    // احفظ البيانات بعد إضافة المستخدم الجديد
    saveUserData(userDatabase);

    alert('تم إنشاء حساب جديد ويمكنك الآن تسجيل الدخول.');
});
