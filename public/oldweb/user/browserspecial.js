function setActiveStyleSheet(title) 
{
  	var i, a, main;
  	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
  	{
    	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) 
		{
      		a.disabled = true;
      		if(a.getAttribute("title") == title) 
	  		{
				a.disabled = false;
			}
    	}
  	}
}

// Some more stuff from me and other places
function setSpecialActiveStyleSheet(title)
{
	var Netscape;
  	var NetscapeVer;
	var temp;
	temp = "thirdway";

  	// detect browser
  	Netscape = (navigator.appName == "Netscape");
  
  // now extract version numbers
  	if(Netscape) 
	{
		n = navigator.userAgent;
		NetscapeVer = n.substr(n.indexOf("Netscape/")+("Netscape/").length, 3);
		NetscapeVer = parseFloat(NetscapeVer); 
  	}

	// Then cheat
  	if((Netscape) && (NetscapeVer < 5))
	{
      	return temp;
	}
	return title;
}

function getActiveStyleSheet() 
{
  	var i, a;
  	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
  	{
    	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled)
		{
			return a.getAttribute("title");
		}
  	}
  	return null;
}

function getPreferredStyleSheet() 
{
	var i, a;
  	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
  	{
    	if(a.getAttribute("rel").indexOf("style") != -1
       		&& a.getAttribute("title"))
	   	{ 
	   		return a.getAttribute("title");
		}
  	}
  	return null;
}

function createCookie(name,value,days) 
{
	if (days)
	{
    	var date = new Date();
    	date.setTime(date.getTime()+(days*24*60*60*1000));
    	var expires = "; expires="+date.toGMTString();
  	}
  	else 
	{
		expires = "";
	}
  	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) 
{
	var nameEQ = name + "=";
  	var ca = document.cookie.split(';');
  	for(var i=0;i < ca.length;i++) 
	{
    	var c = ca[i];
    	while (c.charAt(0)==' ')
		{
			c = c.substring(1,c.length);
		}
    	if (c.indexOf(nameEQ) == 0)
		{
			return c.substring(nameEQ.length,c.length);
		}
  	}
  	return null;
}

function setStyleSheet(title)
{
	title = setSpecialActiveStyleSheet(title);
	setActiveStyleSheet(title); 
}

window.onload = function(e) 
{
  	var cookie = readCookie("style");
  	var title = cookie ? cookie : getPreferredStyleSheet();
	setStyleSheet(title)
}

window.onunload = function(e) 
{
 	var title = getActiveStyleSheet();
  	createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setStyleSheet(title) 
