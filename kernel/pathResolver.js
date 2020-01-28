const resolvedUri = (() => {
    let base = document.querySelector('base').getAttribute('href')
    let regex = new RegExp('\(?!' + base + ')(\/.+)', 'g')
    if (base === '/') return window.location.pathname
    else if (base === window.location.pathname) return '/'
    else return window.location.pathname.match(regex).join('')
})()

export { resolvedUri }  