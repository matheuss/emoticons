function paste(text)
{
	window.close();
	
	chrome.tabs.executeScript({
    	code: 'document.execCommand("insertHTML", false, "' + text + '")'
  	}); 
}

chrome.runtime.onInstalled.addListener(initializeStorage);

function initializeStorage(details)
{
	if(details.reason == 'install')
	{
		var emoticons    = {};
		emoticons.leface = '( ͡° ͜ʖ ͡°)';
		emoticons.shrug  = '¯\\\\_(ツ)_/¯';
		emoticons.s2     = '♥';

		chrome.storage.sync.set(emoticons);
	}

}

