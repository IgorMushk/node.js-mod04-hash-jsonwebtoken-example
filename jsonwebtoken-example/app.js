const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;
//console.log(SECRET_KEY);

const payload = {
    id: "656da6d3766c395a4b27b446",
    name: "Jon"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
//console.log(token);

const decodeToken = jwt.decode(token);
//console.log(decodeToken);

try {
    const {id,name} = jwt.verify(token, SECRET_KEY)
    console.log(id, name);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmRhNmQzNzY2YzM5NWE0YjI3YjQ0NiIsIm5hbWUiOiJKb24iLCJpYXQiOjE3MDE3NzI5NTUsImV4cCI6MTcwMTg1NTc1NX0.lpN7Pfm8O4PVrauhBEx2Uh471IFPTUucRFCdrvyYDim";
    const result = jwt.verify(invalidToken, SECRET_KEY); 
} catch (error) {
    console.log(error.message);
    // invalid signature
}



// valid tokens
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmRhNmQzNzY2YzM5NWE0YjI3YjQ0NiIsIm5hbWUiOiJKb24iLCJpYXQiOjE3MDE3NzI5NTUsImV4cCI6MTcwMTg1NTc1NX0.lpN7Pfm8O4PVrauhBEx2Uh471IFPTUucRFCdrvyYDiM
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmRhNmQzNzY2YzM5NWE0YjI3YjQ0NiIsIm5hbWUiOiJKb24iLCJpYXQiOjE3MDE3NzI5OTUsImV4cCI6MTcwMTg1NTc5NX0.POowsrh2IQBjArSQDPs7z2b4C4rJV3cjas6LuDhhcUc
