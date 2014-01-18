function copy()
{
	document.execCommand('copy');
}

chrome.runtime.onInstalled.addListener(initializeStorage);

function initializeStorage(details)
{
	if(details.reason == 'install')
	{
		var emoticons    = {};
		emoticons.shrug  = '¯\\_(ツ)_/¯';
		emoticons.leface = '( ͡° ͜ʖ ͡°)';

		chrome.storage.sync.set(emoticons);
	}

}


// for(var i = 0; i < divs.length; i++)
//     var div = document.createElement('div');
//     div.setAttribute('id', 'shrug');
//     div.setAttribute('class', 'text');
//     div.innerHTML = '¯\\_(ツ)_/¯';
//     document.getElementsByTagName('body')[0].appendChild(div);
    
//     div = document.createElement('div');
//     div.setAttribute('id', 'leface');
//     div.setAttribute('class', 'text');
//     div.innerHTML = '( ͡° ͜ʖ ͡°)';
//     document.getElementsByTagName('div')[0].parentNode.appendChild(div);
