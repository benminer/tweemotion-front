

const URL = ''

const postData = data => {
    return fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
};

export {
    postData
};