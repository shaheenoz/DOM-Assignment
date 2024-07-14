function removeSelectedItem() {
    let colorSelect = document.getElementById('colorSelect');
    colorSelect.remove(colorSelect.selectedIndex);
}


function changeTextColor() {
    let selectColor = document.getElementById('selectColor');
    let selectedColor = selectColor.value;
    let textParagraph = document.getElementById('text');
    
    textParagraph.style.color = selectedColor;
}

function getFormValues() {
    let form = document.getElementById('form1');
    let firstName = form.elements['fname'].value;
    let lastName = form.elements['lname'].value;
    
    console.log('First name:', firstName);
    console.log('Last name:', lastName);

    return false;
}

function displayRandomImage() {
    let images = [
        {src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"},
        {src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"},
        {src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"}
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    let selectedImage = images[randomIndex];

    let imgElement = document.getElementById('randomImage');
    imgElement.src = selectedImage.src;
    imgElement.width = selectedImage.width;
    imgElement.height = selectedImage.height;
    imgElement.style.display = 'block';
}
