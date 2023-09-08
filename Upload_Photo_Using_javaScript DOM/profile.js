const imageUpload = document.getElementById('imageUpload')
const previewImage = document.getElementById('previewImage')

// Action Listener to the file input
imageUpload.addEventListener('change', function () {
    if(imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(imageUpload.files[0]);
    }
});