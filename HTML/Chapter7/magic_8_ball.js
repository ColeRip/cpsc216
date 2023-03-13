// Possible 8 Ball Responses
let responses = ["Without a doubt", "Ask again later", "Don't count on it"];

let randomNum = Math.floor(Math.random()*responses.length);

document.writeln("<p>Magic 8 Ball says ... <strong>" +
    responses[randomNum] + "</strong></p>");
