function responsiveNavbar() {
    console.log('yo')
    var x = document.getElementById("navbarLinks");
    var y = document.getElementById("navbar")
    if (x.className === "navbarLinkHolder") {
      x.className += " responsive";
    } else {
      x.className = "navbarLinkHolder";
    }
    if (y.className === "navbar") {
        y.className += " responsive";
      } else {
        y.className = "navbar";
      }
  }
  