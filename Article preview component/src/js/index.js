const userDetails = document.querySelector(".user-details")
const sharePopup = document.querySelector(".share-popup")
const shareButton = document.getElementById("btn-share")


shareButton = addEventListener("click", () => {
    sharePopup.classList.remove("hidden")
    userDetails.style.display = "none"
})