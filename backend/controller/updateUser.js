const User = require("../models/User");

exports.updateUser = async (req,res)=>{
    try{
        console.log(req.body);
        console.log(req.params);

        try{
            await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
              });
            
        }
        catch(err){
            console.log(err.message);
            return res.status(400).json({
                success:false,
                message:err.message,
            })
        }
        
        return res.status(200).json({
            success:true,
            message:"Updated Successfully",
        })

    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
