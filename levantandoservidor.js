const express = requiere (express)
const app= express ()
app.get('/May', (req.res)=> res.send ("Hola esto es un control, nada mas >:|"))
app.listen(3000,()=>console.log("servidor en puerto 3000"))
