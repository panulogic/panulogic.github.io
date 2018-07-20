/* =========================================
   Copyright 2018 Class Cloud LLC
   All rights reserved
*/

window.addEventListener ('load', onload);

function contentDivClicked(evt)
{
	let ds      = document.body.dataset;
	let nextUrl = ds.next;
	let prevUrl = ds.previous;
	let clientY = evt.clientY;
	let clientX = evt.clientX;

	if (window.top === window)
	{
		if(evt.target && evt.target.nodeName != "INPUT")
		{ if (clientX < 100 && clientY < 100)
			{ document.location = prevUrl;
				return;
			}
			document.location   = nextUrl;
			return;
		}
	}

}
function iFrameKeyPress(evt)
{
  let charCode = evt.charCode;
  let code     = evt.code;
  let keyCode  = evt.keyCode; // for Edge

  let back     = false;
  if (code === 'Backspace' || keyCode === 8)
	{ back = true;
	}
  if (code === 'ArrowLeft' || keyCode === 37)
	{ back = true;
	}
  if (code === 'ArrowUp' || keyCode === 38)
	{ back = true;
	}
  if (code === 'Delete' || keyCode === 46)
	{ back = true;
	}


	let ds      = document.body.dataset;
	let nextUrl = ds.next     ;
	let prevUrl = ds.previous ;
	//let clientY = evt.clientY ;
	//let clientX = evt.clientX ;

if (window.top === window)
{
   evt.preventDefault();
	 evt.stopPropagation();  // cancelBubble is old variable not a method

  if(evt.target && evt.target.nodeName != "INPUT")
  { if (back)
		{ document.location = prevUrl;
			return;
		}
		document.location   = nextUrl;
		return;
	}
}


}

function onScroll(evt)
{

// IN IFRAME

	  let me     = this;
   let source = evt.target;
   let id     = source.id;


   if (!id)
   { id = source.tagName;
   }

   console.log (source .scrolLTop );
   console.log (this .scrolLTop );


}

function onload()
{

  let copyRight = document.getElementById("copyright");

  if (typeof window !== "undefined")
	{ // we test this on node.js
	  if ( window.addEventListener)
	  { window.addEventListener ('click', onPlainClick);
	    if (window.top !== window)
			{ copyRight.style.display="none";
			}
			 document.body.focus();
			 // else Edge does not reacct to keypresses.
			 document.body.focus();
			 document.body.click();


let cd = document.getElementById('contentDiv');
cd.focus();
cd.click();

			 debugger



		}
	  if ( window.addEventListener)
	  { window.addEventListener ('scroll', onScroll);
		}
	}

  var files = document.querySelectorAll(".File");
  for (var j = 0; j < files.length; j++)
  { let elem         = files[j];
    elem.onclick     = fileClick;
    elem.onmouseover = fileHover;  // there is no onhover
  }


if (document.body && 	document.body .addEventListener)
{	document.body .addEventListener
	('click', contentDivClicked);
}

if (document.body && 	document.body .addEventListener)
{
  // document.body .addEventListener
  window.addEventListener
	('keydown', iFrameKeyPress);
//	('keypress', iFrameKeyPress);
}
// FireFox works with keypress for all keys but chrome
// and edge seem not to for arrow-keys


  let contentDiv = document.getElementById('contentDiv');
  if (contentDiv.addEventListener)
	{

//	contentDiv .addEventListener('click', contentDivClicked);
    let loc    = document.location.href.split(/\?/);
    let y      = loc[1];
    let url    = loc[0];

    let bodyPos  = document.body.scrollTop;
    let cdPos    = contentDiv.scrollTop;
    y = 900;

    contentDiv.scrollTo(0, y);
    window.scrollTo(0, y);

	}

  return;

}

function onPlainClick(evt)
{
let y = window .pageYOffset;
let clickedY = evt.clientY;

 history.scrollRestoration = 'auto';
 // does not work maybe because scroll is inside a div?
 // or because this methods muts have executed
 // before the page is loaded so no scroll restore happens
 // int the newly loaded documwent



 // window.location.href = window.location.href;
  // INstead contentDiv now has a handler
  // because it gets the click and it is
  // the div that needs scrolling.

}

function fileClick(evt)
{ /*
   This function is coded on the server side but then
   my toString() is used to simply produce the same
   function as content of js file CONTROLLER.js.

   We also TEST THIS on the server-side with our
   fake document-object to see that this basically
   runs through its code and has no syntax errors
   etc. so we dont need to discover syntax errors
   at browser-time.
  */

  this.style.fontWeight = "bold";

	let dirModelsTree = ACYC_MODEL_5._dirsModel; // defined in MODEL.js
	let id        		= this .id;
	let datas     		= this .dataset;
	let filePath  		= datas.filepath; // it has lowercased the camels
	let dirPath   		= datas.dirpath;  // it has lowercased the camels

  let index         = dirModelsTree.index;
  let thisFileInfo  = index[filePath];
	let botH          = document.getElementById("BottomHalf");

  // This is ACYC/AcycApp/AcycPresenter/1/2/3/4/5/6/7/8/Controller2.js


	if (botH)
	{
		let docLoc 				= document.location;
		let htmDirPath    = ".." + dirPath + "/$"; // docloc is Apps/$/VIEW.htm
		let parts         = filePath.split(/\//);
		let fileName      = parts[parts.length-1];
		let htmFileName   = fileName.replace(/\.js$/i, ".htm");

		let htmPath       = `${htmDirPath}/${htmFileName}`;

		if (! htmPath.match (/\.htm/))
		{ htmPath = htmPath + ".htm";
		  // happens for dirs. The dir named N shall be described
		  // in $/N.htm .
		}
		if (dirPath === "/")
		{ htmPath = `${htmFileName}`;
		  // the document is the top $/VIEW.htm
		  // and in that same folde rthere is $.htm
		  // we have generated specially it iw what should
		  // show when you click on 0.
      if ("" === htmPath)
			{
				htmPath =  "0.htm"
				// TODO: currently not created automatically
				// but note other dirfiles are created but their
				// content is just a todo -note.
			}
		}
		if (1<2)
		{ let iFrame      = document.getElementById("iFrameOne");
			iFrame.src      =  htmPath;
			return;
		}

	botH.innerHTML = `
<!--
<input type  = "button"
value        = "UPDATE"
onclick      = "UPDATE()"
/>
&nbsp;
<input type ="button"
value       = "OPEN"
onclick     = "OPEN()"
/> 
<p></p>
-->
` +
	"<h2 style='margin-top:0px;'>" + id + "</h2>  "
		+ "<h3>Arguments:</h3>"
		+ thisFileInfo.argFiles.join ("<br/>")
		+ "<h3>All Dependencies:</h3>"
		+ thisFileInfo.allDependencies.join ("<br/>")
		+ "<p></p>"
	} else
	{ debugger
	}

  // You see above this method currently just sets
  // the innerHTM of the bottomHalf.

  // TODO: We muts also store the selected node's path
  // into the global model, that is a convenient place
  // to store the dynamic state of the page as well.



}
  
function fileHover(evt)
{
	let elem = this;
	let botH  = document.getElementById("BottomHalf");
	let parts = elem.id.split (/\//);
	let name  = parts[parts.length-1];
	if (botH)
	{ // botH.innerHTML = "<h3>&nbsp;" + name + "</h3>";
		// dont change confusing when I wasnbtg to debug the
		// output caused by the click
	} else
	{
		// it is missing in the enw system somehow
	}


} 
 
function newXHR(method,  params, $extraCback)
{
  let qs="";
  if (params)
  { qs = "?";
    let comma = "";

    for (var p in params)
    { // let value = params[p];
      let value  = encodeURIComponent (params[p]);
      // WE need encodeURIComponent because else trying to
      // send text which contains '&' that would get confused
      // as the end-marker of the query-string parameter
      // in whose value it appears. In other wrods the text
      // in the text-area wouild get cut off at the first
      // '&' user wrote in it. SEE:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

      qs += `${comma}${p}=${value}`;
      comma = "&";
    }
  }

	let serverUrl = document.location.href + qs ;
	// because this is ajax the url just tells the server
	// who is calling, we are NOT using tyhe content at the
	// URL as such  as  next page-content. Rather we create
	// fors for the user to interact with, to edit the content
	// or add files and fodlers and delete them.

  let xhr    = new XMLHttpRequest();
  xhr.onreadystatechange = responseFromServer;
  xhr.open(method, serverUrl, true);  // only after open you can do:
    xhr.setRequestHeader
   ('Content-type', 'application/x-www-form-urlencoded'
   );
  xhr.send();
  return;


	 /** responseFromServer() assigned as the onreadystatechange
	     -method of the httpXmlRequest which thus will be my 'this'.
	     Uses the scope variable $request.
     */

  function responseFromServer()
  {
    if (    this.readyState == 4
         && this.status     == 200
       )
    {
      let resp = this .responseText;
       if ($extraCback)
       {  $extraCback (this,  method,  params)
       }
    }
	  return;
  }
}
 
function UPDATE(evt)
{
  let verb   = "updateLoaderScript";
  let method = "PUT";
  let url    = "/VIEW.htm";
  let sender = document.location;
  newXHR (method, {verb, url, sender, method}, cb);

  function cb  (request, method,  params)
  { let response = request.response ;
  	if (typeof console !== "undefined")
  	{ console.log (response);

  		let botH = document.getElementById("BottomHalf");
		  if (botH)
		  { botH.innerHTML += "UPDATE() " + new Date()
		    // + response
		    // response would break the interface when browsing
		    // the files without server
  	  }
    }
  }
}
 
function OPEN(evt)
{
  let verb   = "openFileOrFolder";
  let method = "PUT";
  let url    = "/VIEW.htm";
  let sender = document.location;
  newXHR (method, {verb, url, sender, method}, cb);

  function cb  (request, method,  params)
  { let response = request.response ;
  	if (typeof console !== "undefined")
  	{ console.log (response);

  		let botH = document.getElementById("BottomHalf");
		  if (botH)
		  { botH.innerHTML += "<br>O-PEN() " //  + response
  	  }
    }
  }
} 	
 
