select=document.getElementsByClassName('blogs');
allhide=function () {

    for (const elem of select) {
        elem.style.width='0%'
        elem.style.borderStyle='hidden'
    }
}
allhide()