({
	showData : function(component, event, helper) {
		alert(component.get('v.sampledata'));
	},
    resetContent: function(component,event,helper) {
        component.find('myeditor').set('v.value','This is a test');
    }
})