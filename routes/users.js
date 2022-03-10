import express  from "express"
import { v4 as uuidv4 } from 'uuid';


const router = express.Router()

const users = [
    {
        firstName : "Jon",
        lastName  : "Doe",
        age  : "33"
    },
    {
        firstName : "James",
        lastName  : "Doe",
        age  : "26"
    }
]

router.get('/', (req, res) => { 
    console.log(users)   
    res.send(users)
   })

router.post('/', (req, res) => { 
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id: userId}
    users.push(userWithId)
    res.send(`User with the name: ${user.firstName} added! `)
})

router.get('/:id', (req, res) => { 
    const { id } = req.params;
    const foundUSer =  users.find((user) => user.id == id)
    res.send(foundUSer)
 })
 
 
 router.delete('/:id', (req, res) => { 
     const { id } = req.params;
     
     const filteredUSers =  users.filter((user) => user.id != id)
     
     res.send(filteredUSers)
     
    })
    
    router.patch('/:id', (req, res) => { 
        const { id } = req.params;
        const { firstName, lastName, age } = req.body
        const user =  users.find((user) => user.id == id)

        if(firstName){
            user.firstName = firstName
        }
        if(lastName){
            user.lastName = lastName
        }
        if(age){
            user.age = age
        }
        res.send(user)
     })
     
export default router
