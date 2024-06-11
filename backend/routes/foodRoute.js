import express from "express"
import { addFood,listFood,removeFood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine

// const Storage = multer.diskStorage({
//     destination:"./uploads",
//     filename:(req,file,cb)=>{
//         // console.log(file);
//         return cb(nulll,`${Date.now()}${file.originalname}`)
//     }
// })

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`Image-${Date.now()}-${file.originalname}`)
    }
})

const fileFilter=(req,file,callback)=>{
    if (file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/png') {
        callback(null,true)
    } else {
        callback(null,false)
        return callback(new Error("invaild file extension"))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

// const upload = multer({Storage:Storage})

foodRouter.post("/add",multerConfig.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.delete("/remove",removeFood);





export default foodRouter;