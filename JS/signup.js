document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newConfirm = document.getElementById('new-confirm').value;
        const newMail = document.getElementById('new-mail').value;
        const newPassword = document.getElementById('new-password').value;

        // قم بإجراء عمليات التحقق هنا (مثل التحقق من تطابق كلمتي المرور والبريد الإلكتروني)

        if (newUsername.length < 3 || newUsername.length > 30) {
            // قم بإظهار رسالة خطأ إذا كانت البيانات غير صالحة
            alert('اسم المستخدم يجب أن يكون بين 3 و 30 حرفًا.');
            return;
        }

        if (newUsername !== newConfirm) {
            // قم بإظهار رسالة خطأ إذا لم يتطابق التأكيد
            alert('التأكيد لا يتطابق مع اسم المستخدم.');
            return;
        }

        // الآن يمكنك إضافة المستخدم الجديد إلى قاعدة البيانات
        // قم بذلك هنا
    });
});
