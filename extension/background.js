chrome.omnibox.setDefaultSuggestion({
  description: "Hit Enter after entering search query."
});

chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id, {url: "https://developer.apple.com/library/ios/search/?q=" + text});
	});
}