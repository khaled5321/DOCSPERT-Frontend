const baseUrl = "http://localhost:8000/api/v1/"


export async function sendRequest(method = "GET", url, data = {}, token = "") {
    let config = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) {
        config = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    let response = await fetch(baseUrl + url, {
        method: method,
        headers: config,
        body: JSON.stringify(data)
    })

    return response
}


export function handleErrors(errors) {
    let errorsList = []
    for (let key in errors) {
        errorsList.push(errors[key])
    }
    return errorsList
}

export function setAuth(access, refresh) {
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)
}

export function getAuth() {
    let access = localStorage.getItem("access")
    let refresh = localStorage.getItem("refresh")

    return [access, refresh]
}

export function isTokenExpired(token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const now = new Date()
    return now > payload.exp * 1000
}

export async function refreshToken(refresh) {
    await sendRequest("POST",
        "auth/token/refresh/", { "refresh": refresh }).then(async (res) => {
            if (res.status === 200) {
                const data = await res.json()
                localStorage.setItem("access", data.access)
                return data.access
            }
            else {
                return false
            }
        })
}
