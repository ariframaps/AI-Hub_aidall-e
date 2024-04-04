document.addEventListener("mousemove", function (event) {
    var follower = document.querySelector(".bi-triangle-fill");
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Menghitung posisi kursor terhadap elemen pengikut
    var rect = follower.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;

    // Menghitung sudut rotasi antara kursor dan elemen pengikut
    var angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    angle = angle * (180 / Math.PI); // Mengonversi sudut dari radian ke derajat

    // Mengatur transformasi rotasi pada elemen pengikut
    follower.style.transform = "rotate(" + angle + "deg)";
});

