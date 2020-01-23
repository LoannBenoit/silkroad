window.onload = () => {

    /**
     * window file create scripts tags 
     * when all assets (js, images,css,...) done loading.
     * 
     * If you need to load one script before another, 
     * move it up in the Array named scripts below.
     */

    var scripts = [        
        './js/HomeController.js'
    ];

    scripts.forEach((script) => {

        let tag = document.createElement("script");
            tag.type = "text/javascript";
            tag.src = script;

        document.querySelector("body").appendChild(tag);

    })
}