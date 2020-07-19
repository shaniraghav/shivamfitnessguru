$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
  });

  setInterval(function autoplay() {
    $(".carousel").carousel("next");
  }, 4000);
  $(".datepicker").datepicker();
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy();
  $(".scrollspy").scrollSpy();
});