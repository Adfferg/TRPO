const ApiError = require('../exceptions/api-error')
const cloudinaryService = require('../service/cloudinary-service')
class CloudinaryController{
    async destroy(req,res,next){
        try{
            const {id} = req.body
            const result = await cloudinaryService.destroy(id)
            return res.json(result)
        }
        catch(e){
            next(e)
        }
    }

}


module.exports = new CloudinaryController()