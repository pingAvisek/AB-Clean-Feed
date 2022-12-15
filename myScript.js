// For setopati.com
let setoPatiAdDiv = [
  ".sticky-footer-bigyaapan",
  ".mobile-fixed-ad",
  ".full-bigyaapan",
  ".bigyaapan-item",
  ".mobile-bigyaapan-only",
  ".fixed-tops",
  ".top-bigyaapan",
  ".desktop-bigyaapan-only",
  ".top-bigyaapan",
  ".mobile-bigyaapan-only",
  ".top-full",
  ".main-bigyaapan",
  ".mobile-bottom-bigyaapan-only",
  ".modalbox",
  ".mobile-jacket-bigyaapan",
];
for (const i of setoPatiAdDiv) {
  let block = document.querySelectorAll(`${i}`);
  block.forEach((e) => {
    e.setAttribute("style", "display: none !important");
  });
}
console.log(
  "%c AB Clean Feed is Working Fine! ",
  "background: #222; color: #bada55"
);

// For onlinekhabar.com
let onlineKhabarAdDiv = [
  "ok-full-widht-adv",
  "ok-sidebar-ad",
  "okam-ad-position-wrap",
  "home-aftersamachar-half1",
  "okam-device-desktop",
  "home-samachar-right2",
  "okam-each-ad",
  "ok-el-head-adv-square",
];

for (const i of onlineKhabarAdDiv) {
  let block = document.querySelectorAll(`.${i}`);
  block.forEach((e) => {
    e.setAttribute("style", "display: none !important");
  });
}

function remBanner() {
  let headerAd = document.querySelector("section");
  // done this as I can't find any class or id for this
  headerAd.setAttribute("style", "display: none !important"); // still there are some ads
  // console.log("Success");
}
// Still needs to work on this (connect IPS logo)

remBanner();

// For ekantipur;

let ekantipurAdDiv = [
  "static-sponsor",
  "notification-count",
  "layout_sponser_content",
  "app-links",
  "icons",
];

for (const i of ekantipurAdDiv) {
  let block = document.querySelectorAll(`.${i}, #${i}`);
  console.log(block);
  block.forEach((e) => {
    e.setAttribute("style", "display: none !important");
  });
}

function toggleOpedSection() {
  if (
    document.getElementById("blockLayout").classList.contains("oped-toggle")
  ) {
    document.getElementById("blockLayout").classList.remove("oped-toggle");
    document.getElementById("header").classList.remove("oped-toggle");
    document.getElementById("wrapper").classList.remove("oped-toggle");
  } else {
    document.getElementById("blockLayout").classList.add("oped-toggle");
    document.getElementById("header").classList.add("oped-toggle");
    document.getElementById("wrapper").classList.add("oped-toggle");
  }
}

function redDot() {
  let a = document.querySelector(
    "#header > div.setting.col-xs-1.col-sm-1.col-md-1 > label > span"
  );
  let b = document.querySelector("#wrapper > footer > div > div:nth-child(3)");
  a.setAttribute("style", "display: none !important");
  b.setAttribute("style", "display: none !important");
}

function boxSponsored() {
  let boxSponsored = document.querySelector(".box-sponsored");
  boxSponsored.setAttribute("style", "display: none !important");
}

toggleOpedSection();

setTimeout(() => {
  redDot();
  boxSponsored();
  // console.log("Success");
}, 3000);
