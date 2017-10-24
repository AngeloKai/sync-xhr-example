self.onmessage = function (event) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/num', false)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    console.log('worker is running');
    console.log(event);
    console.log(event.data);

    xhr.send(JSON.stringify(event.data));

    console.log('worker is sent');
    
    if (xhr.readyState == 4) {
        self.postMessage('responded');
    }
}