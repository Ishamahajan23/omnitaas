const express = require('express');
const userRouter = require("./routes/user.route")
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);





app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})