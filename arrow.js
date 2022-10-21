arrow=document.getElementById('lengthen');
type=0;
blog=document.getElementById('blog');
friends=document.getElementById('friends');
main=document.getElementById('main')
aboutme=document.getElementById('aboutme')
bk3=document.getElementsByClassName('block3')
fl=document.getElementById('friendlylinks')
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
        aboutme.style.height='0vh';
        aboutme.style.display='none';
        main.style.height='auto';
        arrow.style.display='none';
        setTimeout(frindlink_timeout,200);
        setTimeout(friends_timeout,1400);
        setTimeout(blog_timeout,2700);
        type=1;
    }
}

arrow.onclick=clickevent;

for (const arrayElement of bk3) {
    arrayElement.onclick=clickevent;
}