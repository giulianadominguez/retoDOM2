function seleccionaTexto(Frojos){
    var doc = document,
    text = doc.getElementById(Frojos),
    range,
    selection;
    if(doc.body.createTextRange){ //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    }else if(window.getSelection){ //all others
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
     selection.addRange(range);
    }
}

function seleccionaTexto(Fdulces){
    var doc = document,
    text = doc.getElementById(Fdulces),
    range,
    selection;
    if(doc.body.createTextRange){ //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    }else if(window.getSelection){ //all others
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
     selection.addRange(range);
    }
}
