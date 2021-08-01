// Initialize button with user's preferred color
simulateFight.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        files: ['fancyScript.js'],
    });
});

chrome.runtime.onMessage.addListener((message, send, resp) => {
    let result = message.fightResult
    console.log(result)
    enemy1.textContent = result[0].enemyNumber
    winRate1.textContent = result[0].winRate + "%"

    enemy2.textContent = result[1].enemyNumber
    winRate2.textContent = result[1].winRate + "%"

    enemy3.textContent = result[2].enemyNumber
    winRate3.textContent = result[2].winRate + "%"

    enemy4.textContent = result[3].enemyNumber
    winRate4.textContent = result[3].winRate + "%"
});




