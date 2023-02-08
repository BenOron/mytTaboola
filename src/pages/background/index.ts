import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0];
}
chrome.tabs.onUpdated.addListener(function () {
    getTab().then(tab => {
        console.log(tab);
        // chrome.scripting.executeScript({
        //     target: { tabId: tab.id },
        //     files: ["content-script.js"]
        // });
    })})
console.log("background loaded");
