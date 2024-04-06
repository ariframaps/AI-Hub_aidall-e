
// hero-mouse tracker
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

//hero-rideimage animation
let scrollY = 0;
const heroImg_l1 = document.querySelector('.l1');
const heroImg_r1 = document.querySelector('.r1');
let l1Position = 100;
let r1Position = 0;

document.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > scrollY) {
        l1Position -= 3
        r1Position += 3
        heroImg_l1.style.transform = `translateY(${l1Position}px)`
        heroImg_r1.style.transform = `translateY(${r1Position}px)`
    } else {
        l1Position += 3
        r1Position -= 3
        heroImg_l1.style.transform = `translateY(${l1Position}px)`
        heroImg_r1.style.transform = `translateY(${r1Position}px)`
    }
    scrollY = currentScroll;
})

