


const users=[
    {id:1,name:"abdo"},
    {id:2,name:"shafiq"},
    {id:3,name:"mhmd"},
    {id:4,name:"ali"},
]

const getUsers=(req,res)=>{
    res.json(users);
}


module.exports={getUsers};