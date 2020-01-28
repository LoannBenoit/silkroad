class Engine {

    loadTemplateXhr(templateUrl, data) {

        this.data = data

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', templateUrl)
            xhr.send()

            xhr.onerror = (ev) => {
                reject({
                    status: ev.target.status,
                    statusText: ev.target.statusText
                })
            }

            xhr.onload = (ev) => {
                if (ev.target.status === 200) {
                    let promise = ev.target.response
                    if (typeof data !== 'undefined' && Object.keys(data).length > 0) {
                        promise = this.createTemplate(ev.target.response, data)
                    }
                    resolve(promise)
                } else {
                    reject({
                        status: ev.target.status,
                        statusText: ev.target.statusText
                    })
                }
            }
        })

    }

    createTemplate(template, data) {

        [...template.matchAll(/{{\s*([a-zA-Z0-9]+)\s*}}/gm)].forEach((templateVar) => {
            template = template.split(templateVar[0]).join(data[templateVar[1]])
        })

        return template
    }
}

export default Engine


// {{\s+[a-zA-Z.]+\s+}}  //match {{ variable }}

// Full match	0-14	{{   title  }}
// Group 1.	0-5	{{   
// Group 2.	5-10	title
// Group 3.	10-14	  }}

// (^\s*{{\s+)([a-zA-Z]+)(\s+}})