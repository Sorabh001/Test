function copyToClipboard() {
            var tempInput = document.createElement('input');
            tempInput.value = document.getElementById('outputBox').textContent.trim();
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Link copied to clipboard!');
        }

        function convertUrl() {
            var inputUrl = document.getElementById('driveUrl').value;
            var convertedUrl = inputUrl.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");
            convertedUrl = convertedUrl.replace("/view?usp=drivesdk", "");
            convertedUrl += "";
            var outputBox = document.getElementById('outputBoxa');
            outputBox.innerHTML = '<a href="' + convertedUrl + '" target="_blank">' + convertedUrl + '</a>';

            // Show all buttons
            var buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {
                button.style.display = 'inline-block';
            });
        }

        function previewUrl() {
            var inputUrl = document.getElementById('driveUrl').value;
            var fileId = extractFileId(inputUrl);
            var previewBox = document.getElementById('outputBox');
            if (fileId) {
                var previewUrl = 'https://drive.google.com/file/d/' + fileId + '/preview';
                previewBox.innerHTML = '<iframe src="' + previewUrl + '" width="100%" height="400px"></iframe>';
            } else {
                previewBox.innerHTML = 'Invalid Google Drive URL';
            }
        }

        function extractFileId(url) {
            var fileIdMatch = url.match(/\/file\/d\/([^/]+)\//);
            if (fileIdMatch && fileIdMatch.length > 1) {
                return fileIdMatch[1];
            } else {
                return null;
            }
        }
        
function embedFile() {
    var driveUrl = document.getElementById('driveUrl').value;
    var fileId = getIdFromUrl(driveUrl);
    var section = document.getElementById('sectionSelect').value;
    var embedCode = '<iframe src="https://drive.google.com/file/d/' + fileId + '/' + section + '" width="100%" height="360px" allowfullscreen="allowfullscreen"></iframe>';
    document.getElementById('embedContainer').innerHTML = embedCode;
    document.getElementById('outputBox').value = embedCode;
}

function convertUrl() {
    var inputUrl = document.getElementById('driveUrl').value;
    var convertedUrl = inputUrl.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");
    convertedUrl = convertedUrl.replace("/view?usp=drivesdk", "");
    convertedUrl += ""; 
    var outputBox = document.getElementById('outputBox');
    outputBox.innerHTML = '' + convertedUrl + '';
}
        
function toggleOutput() {
    var section = document.getElementById('sectionSelect').value;
    var outputBox = document.getElementById('outputBox');
    var copyButton = document.querySelector('.button-container');
    var embedContainer = document.getElementById('embedContainer');
    var embedButton = document.getElementById('embedButton');
    var convertUrlButton = document.getElementById('convertUrl');
    var selectOption = document.querySelector('.select-op');

    if (section === 'preview') {
        outputBox.style.display = 'none';
        copyButton.style.display = 'none';
        embedContainer.style.display = 'block';
        embedButton.style.display = 'inline-block';
        convertUrlButton.style.display = 'none';
        selectOption.style.display = 'none'; 
    } else if (section === 'download') {
        outputBox.style.display = 'block';
        copyButton.style.display = 'block';
        embedContainer.style.display = 'none';
        embedButton.style.display = 'none';
        convertUrlButton.style.display = 'inline-block';
        selectOption.style.display = 'none';
    } else {
        selectOption.style.display = 'block';
    }
}

function getIdFromUrl(url) {
    var match = url.match(/\/(file\/d\/|open\?id=)([\w-]+)/);
    return match[2];
}

function copyOutput() {
    var outputBox = document.getElementById('outputBox');
    outputBox.select();
    document.execCommand('copy');
    alert('code copied to clipboard!');
}
var selectElement = document.getElementById('sectionSelect');
var optionIndex = 0; 
selectElement.selectedIndex = optionIndex;
