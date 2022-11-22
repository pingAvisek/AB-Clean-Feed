chrome.runtime.onInstalled.addListener(function (object) {
  let externalUrl =
    "https://www.abhishekg.com.np/thank-you-for-installing-ab-clean-feed.html";
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: externalUrl });
  }
});
