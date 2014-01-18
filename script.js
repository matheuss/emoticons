window.onload = function () 
{
    initializeHTML();

    var divs = document.getElementsByClassName('text');

    for(var i = 0; i < divs.length; i++)
    {      
        divs[i].onclick = function() 
        {
            selectText(this.id);
            console.log("a");
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

function initializeHTML(/*divs*/) 
{
    
    //for(var i = 0; i < divs.length; i++)
    var div = document.createElement('div');
    div.setAttribute('id', 'shrug');
    div.setAttribute('class', 'text');
    div.innerHTML = '¯\\_(ツ)_/¯';

    document.getElementsByTagName('body')[0].appendChild(div);
    
    div = document.createElement('div');
    div.setAttribute('id', 'leface');
    div.setAttribute('class', 'text');
    div.innerHTML = '( ͡° ͜ʖ ͡°)';

    document.getElementsByTagName('div')[0].parentNode.appendChild(div);

    div = document.createElement('div');
    div.setAttribute('id', 'registred');
    div.setAttribute('class', 'text');
    div.innerHTML = '®';

    document.getElementsByTagName('div')[0].parentNode.appendChild(div);

    div = document.createElement('div');
    div.setAttribute('id', 'copyright');
    div.setAttribute('class', 'text');
    div.innerHTML = '©';

    document.getElementsByTagName('div')[0].parentNode.appendChild(div);

}
