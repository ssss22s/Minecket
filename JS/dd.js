document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('ww-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // قم بتحقق من معلومات تسجيل الدخول هنا
        if (username === 'admin' && password === 'password') {
            // عملية تسجيل الدخول ناجحة
            window.location.href = 'dashboard.html'; // قم بتوجيه المستخدم إلى صفحة الداشبورد
        } else {
            // فشلت عملية تسجيل الدخول
            errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
        }
    });
});
