import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 12 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevet XSS attacks cross-site scripting attacks
    sameSite: "strict", //CSRF ATTacks scross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;
