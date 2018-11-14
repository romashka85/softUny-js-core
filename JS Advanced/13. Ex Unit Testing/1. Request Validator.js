function validateRequest(request) {
    let urlRegex = /^[a-zA-Z0-9.]+$/gm;
    let messRegex = /^[^<>\\&'"]+$/gm;

    let methodCheck = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let urlChecker = (request.uri === "*" || urlRegex.test(request.uri) && request.uri);
    let versionCheck = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messegeChecker = (request.message === ''|| messRegex.test(request.message) && request.message !== undefined );
    
    if (!methodCheck.includes(request.method)) {
        throw new Error("Invalid request header: Invalid Method")
    }else if (!urlChecker){
        throw new Error("Invalid request header: Invalid URI")
    }else if (!versionCheck.includes(request.version)){
        throw new Error("Invalid request header: Invalid Version")
    }else if (!messegeChecker) {
        throw new Error("Invalid request header: Invalid Message")
    }

    return request;

}

console.log(validateRequest({
    method: 'GETg',
    uri: 'y',
    version: 'HTTP/1.1',
    message: ''
}));