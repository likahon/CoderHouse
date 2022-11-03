let is_ok = true

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task)
            } else {
                reject('No es posible')
            }
        }, time)
    })
}

export default customFetch