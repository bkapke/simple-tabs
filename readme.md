#A Simple Tab Library#
--------------------------------------------------

Simple Tabs us a basic tabbed navigation library. Use it to toggle
content in a div and style it however you like!  Simple tabs does not require the
menu to be apart of the content so your free to put he tabs wherever to like.


It is simple to use and initialize.

To use this library, add the source files to your
web page and add this to the head of your document.
Note: you must link to a jquery library if you aren't using the pure js version!.

    <!-- link to hosted jquery library (Simple-Tabs requires jQuery to function)-->
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="your-path-to/default.css">
    
    <script src="your-path-to/simple-tabs.min.js"></script>
    
    <script>
        /*Initialize the tabs in a document ready to ensure
         *the page is drawn when you init
         */
        $( document ).ready(function () {
            //pass it to the tab library
            var exampleTabs = new SimpleTabs($('#example-tabs'));
        });
        
    </script>


Basic html

for your tabs...
-------------------------


    <ul class="simple-tabs" id="example-tabs">
        <li class="tab-one active">Tab 1</li>
        <li class="tab-two">Tab 2</li>
        <li class="tab-three">Tab 3</li>
    </ul>


For your content
------------------------

    <div id="tab-one" class="tab-page">
        I am the first tab
    </div>
    
    <div id="tab-two" class="tab-page">
        I am the second tab
    </div>
    
    <div id="tab-three" class="tab-page">
        I am the first tab
    </div>


This should provide a basic demo of the library.  See readme-test.html.


