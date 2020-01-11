export function getSession(key) {
    return window.sessionStorage.getItem(key)
}

export function setSession(key, val) {
    window.sessionStorage.setItem(key, val)
}

export function getLocal(key) {
    return window.localStorage.getItem(key)
}

export function setLocal(key, val) {
    window.localStorage.setItem(key, val)
}
