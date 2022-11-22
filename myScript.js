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
