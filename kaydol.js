function kaydol() {
    const kullaniciAdi = document.getElementById("username").value;
    const sifre = document.getElementById("password").value;

    const yeniKullanici = {
        username: kullaniciAdi,
        password: sifre
    };

    // 1. localStorage'da daha önce kullanıcılar var mı?
    let kullaniciListesi = JSON.parse(localStorage.getItem("kullanicilar")) || [];

    // 2. Yeni kullanıcıyı listeye ekle
    kullaniciListesi.push(yeniKullanici);

    // 3. Güncellenmiş listeyi tekrar localStorage'a yaz
    localStorage.setItem("kullanicilar", JSON.stringify(kullaniciListesi));

    alert("Kayıt başarılı!");
    window.location.href = "giris.html"; // Kayıt başarılı olduğunda anasayfaya yönlendir
}