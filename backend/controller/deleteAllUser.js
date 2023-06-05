const mongoose = require('mongoose');
const User = require("../models/User");
exports.deleteAllUsers = async (req, res) => {
  try {
    
	const ans = await User.deleteMany({});
	console.log(ans.deletedCount,"deleted successfully");
	return res.status(200).json({ 
		success: true,
		message:`${ans.deletedCount} Deleted Successfully` });
  	}
  catch (error) {
    return res.status(500).json({ 
		success: false,
		 error: error.message,
		message:"Error in Deleting" });
  }
}

exports.deleteUser = async (req,res)=>{
	try{
		const user = User.findById({id : req.params.id});
		console.log(user);
		await User.deleteMany({id:user._id});
		return res.status(200).json({
			success:true,
			message:"User successfully deleted",
		}) 
	}
	catch(err){
		return res.status(500).json({ 
			success: false,
			message:"Error in Deleting user", });
	  
	}
}
