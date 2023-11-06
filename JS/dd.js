<script>
    function isUserLogged() {
        const cookie = document.cookie;
        return cookie.includes("logged=true");
    }

    if (isUserLogged()) {
        window.location.href = "Cart.html"; // توجيه المستخدم إلى صفحة دخوله
    }
</script>
