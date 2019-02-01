import express from "express"
import bodyParser from "body-parser"
import router from "./Server/route/app"

const PORT = 5000;
const app = express();

// app.get('/api/v1/party', (req, res) => {
//     res.status(200).send({
//       success: 'true',
//       message: 'party retrieved successfully',
//       parties: db
//     })
//   });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

