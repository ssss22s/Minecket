<script>
    const form = document.querySelector("#login-form");
    const message = document.querySelector("#login-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const usernameInput = document.querySelector("#username").value.trim();
        const passwordInput = document.querySelector("#password").value.trim();

        // يمكنك هنا إجراء الاتصال بقاعدة البيانات والتحقق من وجود الحساب

        // إذا كان لديه حساب، يمكن توجيهه إلى صفحة أخرى بعد تسجيل الدخول

        // إذا لم يكن لديه حساب، عرض الرسالة
        if (!hasAccount(usernameInput, passwordInput)) {
            message.style.display = "block";
        }
    });

    // يمكنك تحديد الدالة التي تتحقق من وجود الحساب هنا
    function hasAccount(username, password) {
        // يجب أن تتحقق من وجود الحساب بناءً على قاعدة البيانات أو طريقة أخرى
        // تعويضيًا، سنقوم بمحاكاة الامر في هذا المثال
        return username === "user" && password === "password";
    }
</script>
