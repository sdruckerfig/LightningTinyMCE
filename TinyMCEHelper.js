({
	doInit : function(component,event,helper) {
		
        var labelClass="uiLabel-left form-element__label uiLabel";
        
        if (component.get('v.labelClass') != '') {
            labelClass += " " + component.get('v.labelClass');
        }
        component.set('v.labelClass',labelClass);
         
        var menubar = false;
        if (component.get('v.showMenubar')) {
            menubar = component.get('v.menubar')
        }
        
        var config = {
            selector: "textarea[name=" + component.get("v.name") + "]",
            menubar: menubar,
            component : component,
            helper: helper,
            resize: component.get('v.resize'),
            browser_spellcheck: component.get('v.browser_spellcheck'),
            statusbar: component.get('v.statusbar'),
            toolbar1: component.get('v.toolbar'),
            paste_word_valid_elements: component.get('v.pasteWordValidElements'),
            setup: function (editor) {
                editor.on('change', function (e) {
                    var component = this.settings.component;
                    component.set('v.value',this.save());
                });
            }
            
        };
        
        if (component.get('v.toolbar1') != '') {
            config.toolbar2 = component.get('v.toolbar1');
        }
        
        if (component.get('v.toolbar2') != '') {
            config.toolbar3 = component.get('v.toolbar2');
        }
        
        // language
        var language =  component.get('v.language');
        if (language != 'en_US') {
            config.language = language;
        }
        
        // contextmenu
        var contextmenu = component.get('v.contextMenu');
        if (contextmenu) {
            config.contextmenu = contextmenu;
            plugins.push('contextmenu');
        }
        
        // support width + height
        var width = component.get('v.width');
        var height = component.get('v.height');
        
        if (width)
            config.width = parseInt(width);
        if (height)
            config.height = parseInt(height);
        
        // content_css
        var content_css = component.get('contentCss');
        if (content_css)
            config.content_css = content_css;
        
        //
        // parse toolbar options and define plugins as needed
        // 
 
        var plugins = ["tabfocus"]; // enable user to tab out of editor
        var tList = (component.get('v.toolbar') + ' ' + component.get('v.toolbar1') + ' ' + component.get('v.toolbar2')).split(' ');
        for (var i=0; i<tList.length; i++) {
            switch(tList[i]) {
                case 'bulllist' :
                case 'numlist' :
                   plugins.push('advlist');
                   plugins.push('lists');
                   break;
                case 'table' :
                   plugins.push('table');
                   break;
                case 'fullscreen' :
                   plugins.push('fullscreen');
                   break;
                case 'searchreplace' :
                   plugins.push('searchreplace');
                   break;
                case 'link' :
                   plugins.push('link');
                   plugins.push('anchor');
                   plugins.push('autolink');
                   break;
                case 'charmap' :
                   plugins.push('charmap');
                   break;
                case 'code' :
                   plugins.push('code');
                   break;
                case 'forecolor' :
                case 'backcolor' :
                    plugins.push('textcolor');
                    plugins.push('colorpicker');
                    break;
                case 'ltr' :
                case 'rtl' :
                    plugins.push('directionality');
                    break;
                case 'emoticons' :
                    plugins.push('emoticons');
                    break;
                case 'image' :
                    plugins.push('image');
                    plugins.push('imagetools');
                    break;
                case 'paste' :
                    plugins.push('paste');
                    break;
                case 'print' :
                    plugins.push('print');
                    break;
                case 'preview' :
                    plugins.push('preview');
                    break;
            }
        }
        
        config.plugins = plugins.join(' ');
       
        tinymce.init(config);
        
	}
})