#A Simple Tab Library#

--------------------------------------------------

##Available for jQuery or Pure JS

Simple Tabs us a basic tabbed navigation library. Use it to toggle
content in a div and style it however you like!  Simple tabs does not require the
menu to be a part of the content so your free to put the tabs wherever to like in the document.

[View Demo](http://yourshoesuntied.com/simple-tabs-demo/)

##jQuery Initialization

>Use the hosted jQuery library or provide a valid link to jQuery in your source

    <html>
    <head>
    
        <!-- link to hosted jquery library (Simple-Tabs requires jQuery to function)-->
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="css/default.css">
        
        <script src="js/simple-tabs.min.js"></script>
        
        <script>
            /*Initialize the tabs in a document ready to ensure
             *the page is drawn when you init
             */
            $( document ).ready(function () {
                //pass it to the tab library
                var exampleTabs = new SimpleTabs($('#example-tabs'));
            });
            
        </script>
        
    </head>
    
## Pure JS Initialization

    <head>
        
        <link rel="stylesheet" type="text/css" href="css/default.css">
        
        
        <script src="js/simple-tabs-pure-js.min.js"></script>
        
        <script>
            /*
             * Initialize the tabs on window to ensure the page is drawn when you init,
             * you may also move the script tags to the end of the body to ensure the element is present when the
             * plugin is called.
             */
            window.onload = function () {
                var div = document.getElementById('example-tabs');
                var exampleTabs = new SimpleTabs(div);
            };
            
        </script>
        
    </head>


## Craft your html like the example below.

    <body>
        <p>This is simply a basic implementation of the library.  Click the tab names and the paragraph below will change.</p>
        <ul class="simple-tabs" id="example-tabs">
            <li class="tab-one active">Tab 1</li>
            <li class="tab-two">Tab 2</li>
            <li class="tab-three">Tab 3</li>
        </ul>
    
        <div id="tab-one" class="tab-page active-page">
            I am the first tab
        </div>
        
        <div id="tab-two" class="tab-page">
            I am the second tab
        </div>
        
        <div id="tab-three" class="tab-page">
            I am the third tab
        </div>
    </body>
    </html>

    
## Explanation

The class of the Tab `<li class="tab-one active">Tab 1</li>` must match the id of the content div `<div id="tab-one" class="tab-page active-page">`.


##Styling


The classes, 'active' and 'active-page' are provided to style the active tabs and pages.  The following css will change the background and text color
of the active (selected) tab.


    ul.simple-tabs li.active {
        background-color: #000000;
        color:#ffffff;
    }
    
    




