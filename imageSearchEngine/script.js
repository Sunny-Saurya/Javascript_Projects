const searchForm = document.getElementById("search-form")

const searchBox = document.getElementById("inputBox")

const searchResult = document.getElementById("search-result")

const showMoreBtn = document.querySelector(".show-more-btn")

const accessKey = "J1kcS7aDdL2R_n2hi2tiBNJXPCsPsj1qwCtdXiSePqA"

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accessKey}&per_page=12`

    const responce = await fetch(url);
    const data = await responce.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const img = document.createElement("img");
        img.src = result.urls.regular;
        img.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(img);

        searchResult.appendChild(imageLink)

    })
    showMoreBtn.style.display = "block"
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page  = 1;
    searchImage();
})

showMoreBtn.addEventListener("click",() =>{
    page += 1;
    searchImage();
})