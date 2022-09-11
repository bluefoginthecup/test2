fetch("https://github.com/bluefoginthecup/test2.git/db.json")
.then((response) => response.text()).then((result) => {
    const users = JSON.parse(result);
    console.log(users);
});