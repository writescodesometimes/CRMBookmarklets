/*
<BookmarkletInfo>
	<Name>
		Enable All Fields
	</Name>
	<Description>
		Enable all fields on the form
	</Description>
</BookmarkletInfo>
*/
// based from https://github.com/gotdibbs/Dynamics-CRM-Bookmarklets
formContext.Xrm.Page.ui.controls.forEach(function(c, i){
    if (c && c.setDisabled) {
        c.setDisabled(false);
    }
});

formContext.Xrm.Page.data.entity.attributes.forEach(function(c, i){
    if (c && c.setSubmitMode) {
        c.setSubmitMode('always');
    }
});