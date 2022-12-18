async function getCoderData() {
        // The await keyword lets js know that it needs to wait until it gets a response back to continue.
        var response = await fetch("https://api.github.com/users/adion81");
        // We then need to convert the data into JSON format.
        var coderData = await response.json();
        console.log(coderData);
        var Img = document.querySelector("img");
        Img.src = coderData['avatar_url']
        var txt = document.querySelector("p");
        txt.innerText = coderData['name'] + " has " + coderData['followers'] + " followers.";
        return coderData;
    }
