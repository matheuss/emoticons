window.onload = function () 
{
    var divs = document.getElementsByClassName('text');
    
    var id;

    for(var i = 0; i < divs.length; i++)
    {      
        divs[i].onclick = function() 
        {
            selectText(this.id);
            copy();
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

}