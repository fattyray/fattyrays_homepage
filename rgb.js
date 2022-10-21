to_select=document.getElementsByClassName('rgb');
color_temp=['red','rebeccapurple','yellow','yellowgreen','orange','green','blue','blueviolet','purple','darkblue','darkcyan','darkslateblue','plum','crimson','deeppink','fuchsia','tomato','orangered','springgreen']
color_len=color_temp.length
changergb=function () {

    for (const elem of to_select) {
        choice=color_temp[Math.floor(Math.random()*color_len)]
        elem.style.backgroundColor=choice
    }
}
changergb()
timer=setInterval(changergb,2950)