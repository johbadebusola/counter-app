let output =
document.querySelector("#output");
let increase =
document.querySelector("#increase");
let decrease =
document.querySelector("#decrease");
let save =
document.querySelector("#save");
let reset =
document.querySelector("#reset");
let saveP =
document.querySelector("#saveP");
let count =0;

increase.addEventListener("click", e => {
count += 1;
output.innerHTML = count;
output.style.color = "green"
}
)

decrease.addEventListener("click", e => { 
count -= 1;
output.innerHTML = count;
output.style.color = "red"
}
)


reset.addEventListener("click", e => {
count = 0
output.innerHTML = count;
output.style.color = "black"
}
)

save.addEventListener("click", e => {
saveP.innerHTML += " " + "(" + count + ")" ;
}
)




