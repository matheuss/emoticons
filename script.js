window.onload = function () 
{
    getStorage();
}

function selectText(id) 
{
    if (document.selection) 
    {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(id));
        range.select();
    } 
    else if (window.getSelection) 
    {
        var range = document.createRange();
        range.selectNode(document.getElementById(id));
        window.getSelection().addRange(range);
    }
}

function getStorage()
{
    chrome.storage.sync.get(null, put);
}

function put(emoticons) 
{
    console.log(emoticons);
    for(var emoticon in emoticons)
    {
        if(document.getElementById(emoticon) == null)
        {
            var div = document.createElement('div');
            div.setAttribute('id', emoticon);
            div.setAttribute('class', 'text');
            div.innerHTML = sanitize(emoticons[emoticon]);
            div.onclick = function() 
            {
                paste(this.innerHTML);
            }
            document.body.appendChild(div);
        }
    }
}

function removeEmoticon(id)
{
    var emoticon = document.getElementById('teste');
    emoticon.parentNode.removeChild(emoticon);
    chrome.storage.sync.remove(id);
}

function addEmoticon(id, text)
{
    var emoticon  = {};
    emoticon[id]  = text;
    chrome.storage.sync.set(emoticon);
    getStorage();
}

function sanitize(text)
{
    var sanitized = "";
    for(var i = 0; i < text.length; i++)
    {
        if(text[i] == text[i + 1])
        {
            sanitized += text[i];
            i++;
        }
        else
        {
            sanitized += text[i];
        }
    }
    return sanitized;

}