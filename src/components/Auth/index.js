const isAuthenticated = () => {
    let login = localStorage.getItem("isAuthenticated");
    if (login === "true") {
        return true
    } else {
        return false
    }
}

const functions = {
    isAuthenticated,
}

export default functions;