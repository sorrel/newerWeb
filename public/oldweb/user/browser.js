function setActiveStyleSheet(title) 
{
  	var i, a, main;
  	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
  	{
    	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) 
		{
			b = a.getAttribute("title");
			a.disabled = true;
      		if(a.getAttribute("title") == title) 
	  		{
				a.disabled = false;
				createCookie("style", title, 365);	// window.onunload doesn't seem to work in safari!
			}
	 	}
	}
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

window.onload = function(e) 
{
  	var cookie = readCookie("style");
  	var title = cookie ? cookie : getPreferredStyleSheet();
	if(title == null)
	{	
 		setActiveStyleSheet("normal");
	}
	else
	{
  		setActiveStyleSheet(title);
	}
}

window.onunload = function(e) 
{
 	var title = getActiveStyleSheet();
  	createCookie("style", title, 365);
}
/*alert("8");
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
if(title == null)
{	
	alert("start is null");
 	setActiveStyleSheet("normal");
}
else
{
	setActiveStyleSheet(title);
}*/


// === SLEIGHT.JS CODE (Copyright YoungPup) WITH MODIFIED CSS-INLINE IMAGE SUPPORT ========================
if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent) 
{
	document.writeln('<style type="text/css">img { visibility:hidden; } </style>');
	window.attachEvent("onload", fnLoadPngs);
}

function fnLoadPngs() 
{
	var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
	var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5);

	for (var i = document.images.length - 1, img = null; (img = document.images[i]); i--) 
	{
		if (itsAllGood && img.src.match(/\.png$/i) != null) 
		{
			var src = img.src;
			img.style.width = img.width + "px";
			img.style.height = img.height + "px";
			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')"
			img.src = "images/spacer.gif"; // change this to your own gif
		}
		img.style.visibility = "visible";
	}
}

if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent) 
{
	window.attachEvent("onload", alphaBackgrounds);
}

function alphaBackgrounds()
{
	var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
	var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5);
	for (i=0; i<document.all.length; i++)
	{
		var bg = document.all[i].currentStyle.backgroundImage;
		if (itsAllGood && bg)
		{
			if (bg.match(/\.png/i) != null)
			{
				var mypng = bg.substring(5,bg.length-2);
				document.all[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+mypng+"', sizingMethod='scale')";
				document.all[i].style.backgroundImage = "url('trans.gif')";
			}
		}
	}
}

