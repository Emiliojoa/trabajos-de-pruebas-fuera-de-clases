const express = require ("express")
const cors = require("cors")

const app= express()
app.use(cors())



const listaDePost=[
   {
            id:"1",
            title: "juan",
            body: "body del post",
        },
        {
            id:"2",
            title: "Emilio",
            body: "body del post",
        }
]

app.get("/post", (req, res)=>{
    res.send(listaDePost)
})

app.get("/post/:id", (req, res) => {
    const postId = req.params.id;
    const post = listaDePost.find((e) => e.id == postId);

    if (!post) {
        return res.status(404).send('Post no encontrado');
    }

    console.log(post);
    res.json(post);
});

app.listen(3000, console.log("servidor andando"))