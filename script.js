var c=0
var t
function timedCount()
{
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()", 1000)
}
function stopCount()
{
clearTimeout(t)
}
function clearTimer()
{
document.getElementById('txt').value=0
c=0
}