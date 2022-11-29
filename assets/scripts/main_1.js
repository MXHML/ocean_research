// When the user scrolls the page, execute myFunction

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener('load',()=>{
    var s= skrollr.init({
        smoothScrolling: true,
        smoothScrollingDuration: 1000,
        easing: 'easeOutCubic'
    });
})