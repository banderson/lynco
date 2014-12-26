/*** NOTE: this relies on the jQuery library! ***/

function pageInit(pageName) {
	setActiveMenu(pageName);
	$('span.email').defuscate();
}

function setActiveMenu(menuID) {
	if (! $(menuID) || menuID === '') return;
	
	$('#navigation ol li#'+ menuID).addClass('selected');
}

// email "defuscator" plugin:
// http://groups.google.com/group/jquery-plugins/browse_thread/thread/f4a39d579af3dc2e
$.fn.defuscate = function(settings) { 
   settings = jQuery.extend({link: true}, settings); 
   return this.each(function(){ 
     $(this).html($(this).html().replace(/\b([A-Z0-9._%-]+)\([^)]+\)((?:[A-Z0-9- ]+\.)+[A-Z]{2,6})\b/gi, 
		settings.link ? '<a href="mailto:$1@$2">$1@$2</a>' : "$1@$2")
		); 
   }); 
};