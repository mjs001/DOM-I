const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",

    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav
let nav=document.querySelectorAll('nav a');
nav.forEach((item,i)=>{
   item.textContent=siteContent["nav"]["nav-item-"+(i+1)];
   item.style.color="green";
});

//Cta
let cta=document.querySelector('.cta-text h1');
let ctaMsg=siteContent["cta"]["h1"];
let pos=ctaMsg.indexOf("Is");
ctaMsg=ctaMsg.substring(0,pos)+"<BR>"+ctaMsg.substring(pos+2,3)+"<BR>"+ctaMsg.substring(pos+2);
cta.innerHTML=ctaMsg;

let button=document.querySelector('.cta-text button');
button.textContent=siteContent["cta"]["button"];

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

//Main Content

let contentHeader = document.querySelectorAll(".text-content h4");
let mainContent = siteContent ["main-content"];
let arr = Object.keys (mainContent).filter(obj => obj.includes("h4"));
for (let i=0; i<contentHeader.length; i++) {
  contentHeader[i].textContent = siteContent["main-content"][`${arr[i]}`]
}

let contentText = document.querySelectorAll(".text-content p");
arr = Object.keys (mainContent).filter(obj => obj.includes("content"));
for (let i=0; i<contentHeader.length; i++) {
  contentText[i].textContent = siteContent["main-content"][`${arr[i]}`]
}

//Mid image
let middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact
let contact=document.querySelector('.contact');
contact.childNodes[1].textContent=siteContent["contact"]["contact-h4"];
let addressArray = siteContent['contact']['address'].split(' ');
addressArray.splice(4, 0, '\r\n');
contact.childNodes[3].innerText=addressArray.join(' ');
contact.childNodes[5].textContent=siteContent["contact"]["phone"];
contact.childNodes[7].textContent=siteContent["contact"]["email"];

//Footer
let footer=document.querySelector('footer');
footer.textContent=siteContent["footer"]["copyright"];
