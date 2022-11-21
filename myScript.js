let blockads = [
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
for (const i of blockads) {
  let block = document.querySelectorAll(`${i}`);
  block.forEach((e) => {
    e.setAttribute("style", "display: none !important");
  });
}
console.log("AdBlocker is working");
