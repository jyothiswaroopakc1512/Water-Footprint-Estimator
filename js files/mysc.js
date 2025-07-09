function redto1() {
    location.href = "Tips.html";
}

function redto2() {
    location.href = "Calc.html";
}

function gotolearn() {
    location.href = "https://en.wikipedia.org/wiki/Water_footprint";
}

function myf() {
    document.getElementById("dem1").innerHTML = "<h4>Reg No's:</h4><b>Deekshitha</b>-22BCE5018<br><b>Jyothi Swaroopa</b>-22BCE1677";
}

function myins() {
    document.getElementById("dem2").innerHTML = "<h4>School:</h4><b>Deekshitha</b>CSE core<br><b>Jyothi Swaroopa</b>CSE core";
}

function getValue() {
    var inputElement = document.getElementById("inputField");
    var inputValue = inputElement.value.toLowerCase();
    var displayElement = document.getElementById("displayValue");
    if (foodItems.hasOwnProperty(inputValue)) {
        var foodItem = foodItems[inputValue];
        displayElement.textContent = "Water Footprint (wft) of " + inputValue + ": " + foodItem.wft + " " + foodItem.unit;
    } else {
        displayElement.textContent = "Invalid input. Please try again.";
    }
}

// New function to handle image processing
function processImage() {
    const imageInput = document.getElementById('imageInput');
    const displayResult = document.getElementById('displayResult');

    if (imageInput.files.length === 0) {
        displayResult.textContent = "Please upload an image!";
        return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const base64Image = e.target.result.split(',')[1];  // Extract Base64 image string

        // Send the image to the backend for analysis
        displayResult.textContent = "Analyzing the image...";
        
        fetch('/analyze-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ base64Image })
        })
        .then(response => response.json())
        .then(data => {
            if (data.totalWFT !== undefined) {
                displayResult.textContent = `Total Water Footprint: ${data.totalWFT} liters`;
            } else {
                displayResult.textContent = "No items detected or water footprint not found.";
            }
        })
        .catch(error => {
            displayResult.textContent = "Error processing the image!";
            console.error("Error:", error);
        });
    };

    reader.onerror = function () {
        displayResult.textContent = "Failed to load the image!";
    };

    reader.readAsDataURL(file);  // Converts the file to a Base64 string
}
