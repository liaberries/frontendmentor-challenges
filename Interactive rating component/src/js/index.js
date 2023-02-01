const mainContainer = document.querySelector(".main-container")
const thankYouContainer = document.querySelector(".thank-you-container") 
const submitButton = document.getElementById("submit-btn")
const rating = document.getElementById("rating")
const allRatings = document.querySelectorAll("#btn")

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

allRatings.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})