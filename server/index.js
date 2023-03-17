import { startApolloServer } from './app.js'
import dotenv from 'dotenv'


dotenv.config();


const PORT = process.env.PORT
app.listen(PORT || 3001)
console.log(`Server listening on port : ${PORT}`);