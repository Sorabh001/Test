    document.getElementById("aadhya-output").addEventListener("click", function() {
                this.select();
                document.execCommand("copy");
                alert("Text copied to clipboard!");
        });
        window.onload = function() {
    var logoText = document.getElementById("logoText");
    var logoImage = document.getElementById("logoImage");
    setInterval(function() {
      if (logoText.style.display === "none") {
        logoText.style.display = "block";
        logoImage.style.display = "none";
      } else {
        logoText.style.display = "none";
        logoImage.style.display = "block";
      }
    }, 3000);
  };
