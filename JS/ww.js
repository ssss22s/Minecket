function isUserLogged() {
    const cookie = document.cookie;
    return cookie.includes("logged=true");
}

if (isUserLogged()) {
    window.location.href = "home.html"; // توجيه المستخدم إلى الصفحة الرئيسية بمجرد تسجيل الدخول
}
const date = new Date();
date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
const expires = ";expires=" + date.toUTCString() + ";path=/";

// بعد تسجيل الدخول بنجاح
document.cookie = "logged=true" + expires;
