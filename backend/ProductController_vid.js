import ProductId from "./ProductModel_vid.js";
import path from "path";
import fs from "fs";


export const getProducts = async(req, res) =>{
    try {
        const response = await ProductId.findAll();
        res.json(response);
    }catch (error)  {
        console.log(error.message);
    }

}

export const getProductsById = async(req, res) =>{   
    try {
    const response = await ProductId.findOne({
        where:{
            id : req.params.id

        }
    });
    res.json(response);
}catch (error)  {
    console.log(error.message);
}

}


export const saveProduct = (req, res) =>{
    if(req.files === null)
    return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.mpg','.mp4','.mov','.mpeg-1','.mpeg-2','.avi', '.webm'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
if(fileSize > 100000000) return res.status(422).json({msg:"Image must be less than 100MB"});

file.mv(`./public/images/${fileName}`, async(err) => {
    if(err) return res.status(500).json({msg: err.message});
    try {
        await ProductId.create({name: name, image: fileName, url: url});
        res.status(201).json({msg:"ProductId Created Successfully"});
    }catch (error) {
        console.log(error.message);
    }
})

}

export const updateProduct = async(req, res) =>{
    const product   = await ProductId.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data"});
    let fileName = "";
    if(req.files === null) {
        fileName = ProductId.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.mpg','.mp4','.mov','.mpeg-1','.mpeg-2','.avi', '.webm'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 100000000) return res.status(422).json({msg:"Image must be less than 100MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if(err) return res.status(500).json({msg: err.message});
        });

    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        await ProductId.update({name: name, image: fileName, url: url},{
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "ProductId Update"})
    } catch (error) {
        console.log(error.message)
        
    }


}

export const deleteProducts = async(req, res) =>{
    const product   = await ProductId.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data"});
    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await ProductId.destroy({
            where:{
                id : req.params.id
            }

        });
        res.status(200).json({msg : "ProductId Deleted"});
    } catch (error) {
        console.log(error.message);
        
    }

}