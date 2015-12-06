({
	afterScriptsLoaded : function(component, event, helper) {
      helper.doInit(component,event,helper);
	},
    
    doInit: function(component,event,helper) {
      helper.doInit();
    },
    
    onChangeValue: function(component,event,helper) {
        var params = event.getParams();
        if (params) {
            var ed = tinymce.editors[component.get('v.name')];
            if (params.value != ed.getContent()) {
           	 ed.setContent(params.value);
            }
        }
    }
    
})