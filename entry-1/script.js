let mobileTitle = document.querySelector('.mobile-title')
let firstEntry = document.querySelector('.entry1')
let navText = document.querySelector('.nav-text')
let toggle = document.querySelector('#toggle')
let body = document.querySelector('body')




function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 0) {
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
      // toggle.classList.remove("desktop-title");
      // toggle.classList.add("mobile-title");
    } else {
      window.removeEventListener("scroll",scrollFunction);
      // toggle.classList.remove("mobile-title");
      // toggle.classList.add("desktop-title");
    }
  }

  //   window.addEventListener("load", (event) => {
  //   console.log("page is fully loaded");
  // });

  
  let x = window.matchMedia("(max-width: 750px)")
  scrollToggle(x) // Call listener function at run time
  x.addListener(scrollToggle) // Attach listener function on state changes

  // window.addEventListener("resize", scrollToggle);

  // body.onload = function(){
  //   console.log('hi there')
  //   // scrollFunction
  // };


  // window.addEventListener("load", (event) => {
  //   console.log("page is fully loaded");
  //   scrollToggle(x)
  // });


  //on load make font this


  //if body or if viewport width =. etc...

  