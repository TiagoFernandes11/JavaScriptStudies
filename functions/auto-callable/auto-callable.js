(function(win, doc){
    "use strict"
    win.alert("Hello World!");

    console.log("Auto-Callable function.");
    
    doc.write("Hello World!");

})(window, document);