
function updateIcon() {
    chrome.browserAction.setBadgeText({
        text: ''
    });
}


chrome.browserAction.setBadgeBackgroundColor({
    color: "[200, 0, 0, 100]"
});


window.setInterval(function () {chrome.browserAction.setBadgeText({text: "!"}); }, 600000);

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null,
        {code:"document.body.bgColor='red'"});
});
