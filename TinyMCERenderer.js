({
    
    // fired when component is destroyed
    unrender: function(component, helper) {
        var ed = tinyMCE.get(component.get('v.name'));
		ed.destroy();
        this.superUnrender();   
    }
})