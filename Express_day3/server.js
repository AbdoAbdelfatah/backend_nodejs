// http => http server
// express => application or instance of express
const express = require("express");
const app = express();


// responses
    // json => return in json format
    // send -> return in row format (html page,text,object,etc)
    // Ejs , template engine
        // render
        // redirect

app.get("/", (req, res) => {
  res.json("hello from express");
});

// middleware express.json()  make parses json to body and unhide data


//app.post("/",express.json(),)
//app.put("/",express.json(),)
//app.delete("/",express.json(),)
// to write min use app.use(insert the middlewares you want )

app.use(express.json());// parsing req.body only
// applied in all router come after not before(like get)
// params /:id id-> is the key if value . when you do this you must send value in url
app.post("/p1/:id",(req,res)=>{
        console.log(req);
        res.json();
});




app.listen(3000, () => {
  console.log("server is running on port 3000");
});

/**
 * four places can i send data on it
 * 1- body => secure
 * 2- query => values sended converted to string format
 * 3- params => /value in url
 * 4- headers => key in headers lowercase if i write capital when i get it i will get it in lowercase 
 */
