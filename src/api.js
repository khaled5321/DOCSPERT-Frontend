const baseUrl = "http://localhost:8000/api/v1/"


export async function sendRequest(method = "GET", url, data = undefined, token = "") {
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

export function setUserData(user) {
    localStorage.setItem("user", user)
}

export function getUserData() {
    return localStorage.getItem("user")
}

export function isTokenExpired(token) {
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const now = new Date()
        return now > payload.exp * 1000
    }
    return true
}

export async function refreshToken(refresh) {
    let respose = await sendRequest("POST",
        "auth/token/refresh/", { "refresh": refresh }
    )

    if (respose.status === 200) {
        const data = await respose.json()
        localStorage.setItem("access", data.access)
        return data.access
    }
    else {
        return false
    }
}

export async function isLogedIn() {
    let [access, refresh] = getAuth()

    if (!isTokenExpired(access)) {
        return true
    }
    else if (!isTokenExpired(refresh)) {
        let access = await refreshToken(refresh)
        return access ? true : false
    }
    else {
        return false
    }
}


export async function getCurrentUser() {
    let login = await isLogedIn()
    if (login) {
        let [access] = getAuth()
        try {
            let data = await sendRequest(
                'GET',
                'users/currentuser/',
                undefined,
                access
            )
            if (data.status === 200) {
                data = await data.json()
                setUserData(data)
                return data
            }
        }
        catch (err) {
            console.log(err)
            return null
        }
    }
}