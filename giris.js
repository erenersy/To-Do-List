function giris() {
    const kullaniciAdiSorgu = document.getElementById("username-login").value.trim();
    const kullaniciSifreSorgu = document.getElementById("password-login").value.trim();

    if (kullaniciAdiSorgu === "" || kullaniciSifreSorgu === "") {
        alert("Kullanıcı adı ve şifre boş bırakılamaz!");
        return;
    }

    const kullaniciListesi = JSON.parse(localStorage.getItem("kullanicilar")) || [];
    const kullanici = kullaniciListesi.find(k => k.username === kullaniciAdiSorgu && k.password === kullaniciSifreSorgu);

    if (kullanici) {
        alert("Giriş başarılı!");
        window.location.href = "homepage.html"; // Giriş başarılı olduğunda anasayfaya yönlendir
    } else {
        alert("Kullanıcı adı veya şifre yanlış!");
    }
}
