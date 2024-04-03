const express = require("express")
const path = require('path')

const app = express();

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(8000, () => {
  console.log('Web iniciada ' + 8000);
});