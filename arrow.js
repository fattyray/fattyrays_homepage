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
        elem.style.width='45%'
        elem.style.borderStyle='solid'
    }
}



frindlink_timeout=function () {

    fl.style.height='30vh';


}
friends_timeout=function () {

    friends.style.height='50vh';

}
blog_timeout=function () {

    blog.style.height='120vh';

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
        setTimeout(allshow,3500)
        type=1;
    }
}

arrow.onclick=clickevent;

for (const arrayElement of bk3) {
    arrayElement.onclick=clickevent;
}