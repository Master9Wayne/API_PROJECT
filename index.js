document.getElementById("new").addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            let advice = data.slip.advice; 
            sessionStorage.setItem("advice", advice); 

            
            document.getElementById("result").innerText = advice;
            document.getElementById("date").innerText = new Date().toLocaleString();
        })
        .catch(error => console.error("Error fetching advice:", error));
});

document.getElementById("delete").addEventListener("click", function () {

location.reload();
});

    
document.getElementById("tweet").addEventListener("click", function () {
        let advice = sessionStorage.getItem("advice"); 
    
        if (!advice) {
            console.error("No advice found to tweet.");
            return;
        }
    
        
        var tweetText = encodeURIComponent(advice);
    
        
        var tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    
        
        window.open(tweetUrl, "_blank");
});
    

