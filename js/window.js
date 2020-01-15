window.onload = () => {

    /**
     * window file create scripts tags 
     * when all assets (js, images,css,...) done loading.
     * 
     * If using any tier type of libraries
     * load them here
     * 
     * If you need to load one script before another, 
     * move it up in the Array named scripts below.
     */

    var scripts = [        
        // example d'imports 
        // '../assets/lib/js/superanimation.js' 
        // 'http://animation.javascript/superanimation.min.js'
    ]

    scripts.forEach((script) => {

        let tag = document.createElement('script')
            tag.type = 'text/javascript'
            tag.src = script

        document.querySelector('body').appendChild(tag)

    })
}