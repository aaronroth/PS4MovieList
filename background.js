function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function removeUnwantedMovies() {
    var executing = browser.tabs.executeScript({
        file: "content_script.js",
        allFrames: true
    });
    
    executing.then(onExecuted, onError);
}

browser.browserAction.onClicked.addListener(removeUnwantedMovies);
