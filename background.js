function removeUnwantedMovies() {
    var executing = browser.tabs.executeScript({
        file: "content_scripts/content_script.js",
        allFrames: true
    });
}

browser.browserAction.onClicked.addListener(removeUnwantedMovies);
