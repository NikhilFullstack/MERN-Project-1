const User = require("../models/User");

exports.updateUser = async (req,res)=>{
    try{
        const { name, email, title, department, role } = req.body;
        //validate
        //check if secretkey exist

        try{
            const checkKey=User.find({id:req.params.id});
            await User.updateOne({id:checkKey._id},{
                name:name,
                email:email,
                title:title,
                department:department,
                role:role,
            })
        }
        catch(err){
            console.log(err.message);
            return res.status(400).json({
                success:false,
                message:"Secret Key doesn't exist",
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
