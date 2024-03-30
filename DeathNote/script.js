var a = 0;
var b = 0;
var c = 0;
var d = 0;

qNum=1

function fa()
{
	a++;
	qChange();
}
function fb()
{
	b++;
	qChange();
}
function fc()
{
	c++;
	qChange();
}
function fd()
{
	d++;
	qChange();
}
function qChange()
{
	if (qNum<3)
	{
		qNum++;
		hide("id2");
		hide("id3");
		hide("id1");
		show("id"+qNum);
	}
	else
	{
		hide("id2");
		hide("id3");
		hide("id1");
		if (a>=b & a>=c & a>=d){show("id5.1")}
		else if (b>=a & b>=c & b>=d){show("id5.2")}
		else if (c>=b & c>=a & a>=d){show("id5.3")}
		else {show("id5.4")}
	}
}
function hide(e)
{
	document.all(e).style.display="none";
}
function show(e)
{
	document.all(e).style.display="block";
}
