let firstParagraph = document.querySelector("p");

firstParagraph.textContent = "Most Popular Female Baby Names in 1966:";

let listArray = document.querySelectorAll("li");

const names1966 = ["Lisa","Kim","Mary"];

let counter = 0;
for (let item of listArray) {
    console.log(item.innerHTML);
    item.innerHTML = names1966[counter];
    counter++;
};
