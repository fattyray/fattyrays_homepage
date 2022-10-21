fadein=document.getElementById('fadein')
s="I'm a college student of University of Electronic Science and Technology of China(Also known as UESTC)\n" +
    "                Though majoring in SCSE(School of Computer Science and Engineering,I don't really know much about it before\n" +
    "                I started my freshman year.And this homepaage or blog is a reminder to me to mark what I have accomplished or\n" +
    "                to share the interesting things that I wanna share with all of you who care enough to visit me at this homepage."
nums=s.length
ni=0
add=function () {
    if (ni<nums)
    {
        fadein.innerHTML+=s[ni];
        ni++;
    }
    else {
        window.clearInterval(timer);
    }

}
timer=setInterval(add,60);