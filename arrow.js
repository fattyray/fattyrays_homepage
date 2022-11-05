arrow=document.getElementById('lengthen');
type=0;
blog=document.getElementById('blog');
friends=document.getElementById('friends');
main=document.getElementById('main')
aboutme=document.getElementById('aboutme')
bk3=document.getElementsByClassName('block3')
fl=document.getElementById('friendlylinks')

selected=document.getElementsByClassName('blogs');
allshow=function () {

    for (const elem of selected) {
        pic=elem.firstElementChild;
        tit=pic.nextElementSibling;
        dis=tit.nextElementSibling;
        elem.style.width='46vw';
        pic.style.width='20vw';
        tit.style.width='26vw';
        dis.style.width='26vw';

    }
}

allshow_end=function () {

    for (const elem of selected) {
        pic=elem.firstElementChild;
        tit=pic.nextElementSibling;
        dis=tit.nextElementSibling;
        elem.style.borderStyle='solid';
        elem.style.transition='width 0.1s'
        pic.style.transition='width 0.1s';
        tit.style.transition='width 0.1s';
        dis.style.transition='width 0.1s';
    }
}


frindlink_timeout=function () {

    fl.style.height='60vw';


}
friends_timeout=function () {

    friends.style.height='90vw';

}
blog_timeout=function () {

    blog.style.height='50vw';

}
clickevent=function () {
    if (type===0){
        fl.style.display='block'
        friends.style.display='block'
        blog.style.display='block'
        aboutme.style.height='0vh';
        aboutme.style.display='none';
        main.style.height='auto';
        arrow.style.display='none';
        setTimeout(frindlink_timeout,50);
        setTimeout(friends_timeout,300);
        setTimeout(blog_timeout,1500);
        setTimeout(allshow,3000);
        setTimeout(allshow_end,4700);
        type=1;
    }
}

arrow.onclick=clickevent;

for (const arrayElement of bk3) {
    arrayElement.onclick=clickevent;
}