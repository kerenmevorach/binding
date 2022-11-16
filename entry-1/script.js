var mobileTitle = document.querySelector('.mobile-title')
var firstEntry = document.querySelector('.entry1')

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 90) {
//     mobileTitle.style.fontSize = "calc(var(--base)/1.3)";
//     mobileTitle.style.lineHeight = "calc(var(--leading)/1.9)";
//     mobileTitle.style.fontWeight = "200";
//     mobileTitle.style.marginTop = "4px";
//     firstEntry.style.height = "var(--nav-height)";
//   } else {
//     mobileTitle.style.fontSize = "35px";
//     mobileTitle.style.lineHeight = "40px";
//     mobileTitle.style.fontWeight = "100";
//     mobileTitle.style.marginTop = "8px";
//     firstEntry.style.height = "150px";
// }
//   }

window.onscroll = function() {

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

