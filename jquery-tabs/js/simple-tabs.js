var SimpleTabs = function (elem) {
    //get tab objects and store as pane + tab
    var activeTabObject;
    
    var TabObject = function () {
        var self = this;
        this.tab; //element
        this.pane; //element
        this.setClick = function () {
            $(self.tab).click(function () {
                self.showThisTab();
            });
        };
        
        this.showThisTab = function () {
            if (self !== activeTabObject) {
                //change the tab page and update the active tab
                $(activeTabObject.pane).removeClass('active-page');
                $(activeTabObject.tab).removeClass('active');
                $(self.pane).addClass('active-page');
                $(self.tab).addClass('active');
                activeTabObject = self;
            }
        };
        
    };
    
    $.each(elem.children(), function (id,val){
        var tab = new TabObject();
        tab.tab = val;
        var classString = $(val).attr('class');
        var className = classString.split(' ')[0];
        tab.pane = $('#' + className);
        tab.setClick();
        if (classString.indexOf('active') > -1) {
            activeTabObject = tab;
        }
    });
    
};