const express =  require('express')
const app = express()
const PORT = 3000;

app.use(express.json())


app.get('/',(req,res) => {
    res.send('Minha aplicação no JS com Express esta funcionando')
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

