let mobileTitle = document.querySelector('.mobile-title')
let firstEntry = document.querySelector('.entry1')
let navText = document.querySelector('.nav-text')
let body = document.querySelector('body')

function smallMobileNav(){
  mobileTitle.style.fontSize = "var(--nav-type)";
  mobileTitle.style.lineHeight = "calc(25px/1.9)";
  mobileTitle.style.fontWeight = "200";
  mobileTitle.style.marginTop = "var(--top-margin)";
  firstEntry.style.height = "var(--nav-height)";
}

function largeMobileNav(){
  mobileTitle.style.fontSize = "35px";
  mobileTitle.style.lineHeight = "40px";
  mobileTitle.style.fontWeight = "100";
  mobileTitle.style.marginTop = "8px";
  firstEntry.style.height = "var(--selected-nav-height)";
}

function desktopNav(){
  mobileTitle.style.fontSize = "19px";
  mobileTitle.style.lineHeight = "calc(var(--leading)/1.9)";
  mobileTitle.style.fontWeight = "200";
  mobileTitle.style.marginTop = "var(--top-margin)";
  firstEntry.style.height = "100%";
}


function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 80) {
    smallMobileNav()
  } else {
    largeMobileNav()
  }
  }
  

  function scrollToggle(x) {
    if (x.matches) { 
      console.log('add')
      window.addEventListener("scroll", scrollFunction);
      largeMobileNav()
    } else {
      console.log('remove')
      window.removeEventListener("scroll",scrollFunction);
      desktopNav()
    }
  }

  
  let x = window.matchMedia("(max-width: 1049px)")
  scrollToggle(x) // Call listener function at run time
  x.addListener(scrollToggle) // Attach listener function on state changes