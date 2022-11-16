var mobileTitle = document.querySelector('.mobile-title')
var firstEntry = document.querySelector('.entry1')

var navText = document.querySelector('#nav-text')

// window.onscroll = function() {scrollFunction()};
// window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 90) {
    mobileTitle.style.fontSize = "calc(var(--base)/1.3)";
    mobileTitle.style.lineHeight = "calc(var(--leading)/1.9)";
    mobileTitle.style.fontWeight = "200";
    mobileTitle.style.marginTop = "4px";
    firstEntry.style.height = "var(--nav-height)";
  } else {
    mobileTitle.style.fontSize = "35px";
    mobileTitle.style.lineHeight = "40px";
    mobileTitle.style.fontWeight = "100";
    mobileTitle.style.marginTop = "8px";
    firstEntry.style.height = "150px";
}
  }

  function scrollToggle(x) {
    if (x.matches) { 
      // scrollFunction()
      window.addEventListener("scroll", scrollFunction);
      // firstEntry.style.height = "var(--nav-height)";
    } else {
      window.removeEventListener("scroll",scrollFunction);
      mobileTitle.style.fontSize = "calc(var(--base)/1.3)";
      mobileTitle.style.lineHeight = "calc(var(--leading)/1.9)";
      // firstEntry.style.height = "100%";
      // firstEntry.style.top = "0";
      // navText.classList.remove("mobile-title");
    }
  }
  
  var x = window.matchMedia("(max-width: 750px)")
  scrollToggle(x) // Call listener function at run time
  x.addListener(scrollToggle) // Attach listener function on state changes
