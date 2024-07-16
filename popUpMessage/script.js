let submit = document.querySelector("#submit")
        let form = document.querySelector(".container")

        submit.addEventListener("click", function (event) {


            event.preventDefault();

            let card = document.querySelector(".card")

            // Clear the card content if it already exists

            card.innerHTML = "";

            // card.style.display = "none"

            let div = document.createElement("div")
            div.classList.add("img")
            let img = document.createElement("img")
            img.src = "404-tick.png"
            div.appendChild(img)
            card.appendChild(div)

            let h3 = document.createElement("h3")
            h3.innerHTML = "Thank You!"

            card.appendChild(h3)

            let p = document.createElement("p")
            p.innerHTML = "Your feedback has been successfully submitted. Thank you for your precious time. Have a nice day. !"

            card.appendChild(p)

            let button = document.createElement("button")
            button.classList.add("btn")
            button.innerHTML = "Close"
            card.appendChild(button)
            // body.appendChild(card)

            card.style.display = "block"

            button.addEventListener("click", function () {
                card.style.display = "none";
            });

        })


        // now we have to do like, when we press submit the form should be disabled or not visible and the Thak you card should be enable 

        submit.addEventListener("click",function(){
            form.style.display = "none"
        })

