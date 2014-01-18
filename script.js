window.onload = function () 
{
    chrome.storage.sync.get(null,initializeHTML);

    var divs = document.getElementsByClassName('text');

    for(var i = 0; i < divs.length; i++)
    {      
        divs[i].onclick = function() 
        {
            selectText(this.id);
            copy();
        }
    }
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

function initializeHTML(emoticons) 
{
    console.log(emoticons);

    for(var emoticon in emoticons)
    {
        var div = document.createElement('div');
        div.setAttribute('id', emoticon);
        div.setAttribute('class', 'text');
        div.innerHTML = emoticons[emoticon];
        document.getElementsByTagName('body')[0].appendChild(div);
        alert(emoticon);
    }
}

function removeEmoticon(id)
{
    var emoticon = document.getElementById(id);
    emoticon.parentNode.removeChild(emoticon);
}

function addEmoticon(id, text)
{
    div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'text');
    div.innerHTML = text;
    document.getElementsByTagName('div')[0].parentNode.appendChild(div);
}