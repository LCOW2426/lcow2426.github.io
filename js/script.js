$(document).ready(function () {
    // console art
    console.info(
        `\n%c🐱 Shrestha Choppers 🐱%c \nMade by Arbin%c`,
        "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; padding:0.15rem; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
        'font-weight: bold; font-size: 1rem;color: #ceb73f;',
        "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;",
      );

    //   for hamburger
    $(".menu-toggle").click(function () {
        $("nav ul").toggleClass("mobile-ham-menu");
        $(".ham").toggle();
        $(".cross").toggle();
    });
});