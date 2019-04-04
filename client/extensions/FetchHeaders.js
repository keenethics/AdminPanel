const fetchHeaders = (url, options) => {
    let token = sessionStorage.getItem('jwtToken');
    if (token && token !== "undefined" && token !== 'null') {
        if (!options.headers)
            options.headers = {};
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(url, options);
};

export default fetchHeaders;