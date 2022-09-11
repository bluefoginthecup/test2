fetch("https://github.com/bluefoginthecup/test.git/db.json").then((response) => response.text()).then((result) => {
    const users = JSON.parse(result);
    console.log(users);
});