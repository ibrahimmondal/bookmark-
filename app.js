// localStorage.setItem("text", "ibrahim mondal")
// localStorage.setItem("text1", "ibrahim mondal")
// localStorage.setItem("text2", "ibrahim mondal")
// localStorage.setItem("text3", "ibrahim mondal")


// localStorage.clear()




let allLink = [];

const input = document.getElementById("input");
const saveLink = document.getElementById("save-link");
const saveCurrentTab = document.getElementById("save-current-tab");
const deleteAllLink = document.getElementById("delete-all-link");
const list = document.getElementById("list");

let getLinkFromLocalStorage = JSON.parse(localStorage.getItem("links"));

if(getLinkFromLocalStorage) {
    allLink = getLinkFromLocalStorage;
    renderArr(allLink)
}

function renderArr(arr) {
    list.innerHTML = "";
  arr.forEach((item) => {
    list.innerHTML += `<li >
                <a href=${item} target="blank">${item}</a>
            </li>`
  });
}


saveLink.addEventListener("click", () => {
    let link = input.value;
    allLink.push(link);
    input.value = "";
    localStorage.setItem("link", JSON.stringify(allLink));
    renderArr(allLink)
});



deleteAllLink.addEventListener("click", () => {
    localStorage.clear();
    allLink = [];
    // list.innerHTML = "";
    renderArr(allLink)
});

saveCurrentTab.addEventListener("click", () => {
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0].url;
    allLink.push(activeTab);
    localStorage.setItem("links", JSON.stringify(allLink));
    renderArr(allLink);
   });
});