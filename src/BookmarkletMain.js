/*
Based from code found here https://github.com/gotdibbs/Dynamics-CRM-Bookmarklets
*/

(function(formContext){
//[[Bookmarklet-Code-Inserted-Here]]	
})(function () {
	// Attempt to find and return the fromContext object to pass into the bookmarklet code.
    if (!window.APPLICATION_VERSION) {
        return alert('Could not determine the current version of CRM.');
    }
    if (window.APPLICATION_VERSION === '5.0') {
		// for 5.0 it is the first frame.
        return window.top.frames[0];
    }
    else if (/^[6,7]\.\d+$/.test(window.APPLICATION_VERSION)) {
        var $iframe = $('#crmContentPanel iframe:not([style*=\'visibility: hidden\'])');
        
		// extract it from the iframe.
        if ($iframe.length > 0 && $iframe[0].contentWindow.Xrm.Page.ui) {
            return $iframe[0].contentWindow;
        }
        else {
            return alert('[CRM 2013/2015] Could not locate the entity form.');
        }
    }
    else if (window.APPLICATION_VERSION) {
        return alert('Unsupported CRM Version Detected: ' + window.APPLICATION_VERSION);
    }
    else {
        return alert('Unable to detect current CRM Version.');
    }
}(window));