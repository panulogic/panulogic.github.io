
  
  someHtmlVisibleFunk ();
  
  /*
  this should juts define a set of functions which can then
  be called from scripts you emebd in your html pages.
  
  BUT tiy might as well create a class and store it into
  some global variable.
  
  Point in the client-side if we just  provide the
  source of some functions then of course those 
  functions become global.
  */
  
function someHtmlVisibleFunk ()
{

// window.top.document.title  = 'someHtmlVisibleFunk(): ' +  new Date().getSeconds();
// Above would cause an cross-domain error on Chrome at least
 
  if (true)
  {  
    return;
    
    // modify this whould update automatically
    // yes now
  }
  
	alert 
	(`
someHtmlVisibleFunk() in
someClientSideJS.js.

This shows how to use 
inner back-quotes
	`)
}
	 
