
const coludinary = require("cloudinary").v2;

exports.uploadImageToClodinary= async (file , folder , quality=100 , height=100)=>{

    const options={folder};
    if(height){
        options.height=height;
    }
    if(quality){
        options.quality=quality;
    }
    options.resource_type = "auto";

    return await coludinary.uploader.upload(file.tempFilePath , options);
}

