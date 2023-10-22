window.URL = window.URL || window.webkitURL;
blob = true && window.URL;
function readImg(file, previewImg, width, height, border, hid)
{
  var hid1 = document.getElementById(hid);
  var reader = new FileReader();
  reader.addEventListener("load", function(){
    var image = new Image();
    image.addEventListener("load", function(){
      Math.round(file.size / 1024) + "KB";
      previewImg.innerHTML="";
      previewImg.appendChild(this);
      if(blob)
      {
     window.URL.revokeObjectURL(image.src); 
      }  
    });
    hid1.value = blob ? window.URL.createObjectURL(file) : reader.result;
      image.src = blob ? window.URL.createObjectURL(file) : reader.result;
      image.style.width = width + "px";
      image.style.height = height + "px";
      image.style.borderRadius = border + "%";
  });
  reader.readAsDataURL(file);
}

function fillImg(fileupload, viewImage, hidImgVal)
{
  var fileUploadId = document.getElementById(fileupload);
  var viewImageId = document.getElementById(viewImage);
  var files = fileUploadId.files;
  var error = "";
  if(!files)
  {
    error += "File Upload Not Supported By  Your Browser";
  }
  
  if(files && files[0])
  {
      for(var i=0; i<files.length; i++)
      {
        var file = files[i];    
        if ((/\.(png|jpeg|jpg|gif)$/i).test(file.name)) {
                readImg(file, viewImageId, 50, 50, 50, hidImgVal);
            } else {
                errors += file.name + " Unsupported Image extension\n";
            }
      }
  }
  if (errors) {
    alert(errors);
   }
}
