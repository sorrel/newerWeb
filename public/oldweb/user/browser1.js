// Some more stuff from me and other places
function WriteVersion(){
	var Netscape, MSIE, Opera, Unknown;
  	//var Win, Mac, Unix, Other;
  	var NetscapeVer, MSIEVer, OperaVer;

  	// detect browser
  	Netscape = (navigator.appName == "Netscape");
  	MSIE = (navigator.appName == "Microsoft Internet Explorer");
  	Opera = (navigator.userAgent.indexOf("Opera") > -1);
  	Unknown = !(Netscape || MSIE || Opera);
  
  	// detect platform
   	//Win = navigator.userAgent.indexOf("Win") > -1;
  	//Mac = navigator.userAgent.indexOf("Mac") > -1;
	//Unix = navigator.userAgent.indexOf("Unix") > -1;
  	//Other = !(Win || Mac || Unix);
  
  // now extract version numbers
  	if(Netscape) {
    	//NetscapeVer = parseFloat(navigator.appVersion);
		n = navigator.userAgent;
		NetscapeVer = n.substr(n.indexOf("Netscape/")+("Netscape/").length, 3);
		NetscapeVer = parseFloat(NetscapeVer); 
  	}
  	else if(MSIE) {
    	n = navigator.userAgent;
    	MSIEVer = n.substr(n.indexOf("MSIE ")+("MSIE ").length, 4);
    	MSIEVer = parseFloat(MSIEVer); 
  		if(Opera) {
      		OperaVer = n.substr(n.indexOf("Opera ")+("Opera ").length, 4);
      		OperaVer = parseFloat(OperaVer);
    	}
  	}

  	// now do something!
  	//if(Win) {
    //	document.write("Using a Windows ");
  	//}
  	//else if(Mac) {
    //	document.write("Using a <BR>");
  	//}
  	//else {
    //	document.write("I don't know what platform you're using!<BR>");
  	//}
  	document.write("This site is designed to work on ");
	
	// Then cheat
  	if(Netscape) {
		if(NetscapeVer > 4) {
      		document.write("Netscape Navigator " + NetscapeVer);
    	}
    	else{
			document.write("Netscape Navigator 7");
		}
  	}
  	else if(MSIE) {
    	if(Opera) {
			if(OperaVer > 5){
				document.write("Opera " + OperaVer);
			}
			else{
				document.write("Opera 7.11");
			}
    	}
		else
		{
			if(MSIEVer > 5){
				document.write("Internet Explorer " + MSIEVer);
			}
			else if(MSIEVer == 5){
				document.write("Internet Explorer 5.5, or higher");
			}
			else
			{
				document.write("Internet Explorer 6, please upgrade");
			}
    	}
  	}
  	else {
    	document.write("Site designed for IE 6, NN 7 and Opera 7");
  	}
}

function setActiveStyleSheet(title) 
{
  	var i, a, main;
  	for(i=0; (a = document.getElementsByTagName("style")[i]); i++) 
  	{
    	if(a.getAttribute("title")) 
		{
      		a.disabled = true;
      		if(a.getAttribute("title") == title) 
	  		{
				a.disabled = false;
			}
    	}
  	}
}

function getActiveStyleSheet() 
{
  	var i, a;
  	for(i=0; (a = document.getElementsByTagName("style")[i]); i++) 
  	{
    	if(a.getAttribute("title") && !a.disabled)
		{
			return a.getAttribute("title");
		}
  	}
  	return null;
}

function getPreferredStyleSheet() 
{
	var i, a;
  	a = document.getElementsByTagName("style");
  	if(a.getAttribute("title"))
	{ 
	   	return a.getAttribute("title");
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
  	setActiveStyleSheet(title);
}

window.onunload = function(e) 
{
 	var title = getActiveStyleSheet();
  	createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);


