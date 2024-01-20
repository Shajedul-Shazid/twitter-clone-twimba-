import { tweetsData } from '/data.js'

const tweetsInput = document.getElementById("tweets-input")
const tweetBtn = document.getElementById("tweet-btn")

tweetBtn.addEventListener("click", function(){
    console.log(tweetsInput.value)
    tweetsInput.value = ""
})