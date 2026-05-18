import jwt from "jsonwebtoken";
import "dotenv/config";
const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ msg: "Token not found" });

    const secret =process.env.SECRET;
    if (!secret) {
      console.log("JWT_SECRET not found in middleware!"); // Debugging message
      return res.status(500).json({ msg: "JWT secret not configured" });
    }

    const verifyToken = jwt.verify(token, secret);
    req.userId = verifyToken.userId;
    next();
  } catch (err) {
    console.log("JWT verify error:", err.message);  // Debugging message
    return res.status(401).json({ msg: "Invalid token" });
  }
};

export default isAuth;

// import  jwt  from "jsonwebtoken";
// import "dotenv/config";
// const isAuth = async(req,res,next)=>{
// try{
//     const token = req.cookies.token;
//     if(!token){
//         return res.status(400).json({msg:"token not found"});
//     }
//     if (process.env.JWT_SECRET) {
//         console.log("JWT_SECRET not found!");
//         return res.status(500).json({ msg: "JWT secret not configured" });
//     }
//     const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
//     req.userId = verifyToken.userId;
//     console.log(verifyToken);
//     console.log(token);
//     next();
// }catch(err){
//     return res.status(500).json({msg:`get current user error: ${err} `})}
// }

// export default isAuth;