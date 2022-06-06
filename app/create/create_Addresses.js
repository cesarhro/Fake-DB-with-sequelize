const {ceps} = require('../data/ceps')
const {Addresses} = require('../../models/index')
const cep = require('cep-callback')

function RandomChoicer(max, min = 0){
    let choice = Math.floor(Math.random() * (max - min) + min)
    return choice
}

async function teste(){
    const t = ceps[RandomChoicer(ceps.length)]
    const f = new Date()
    array = []

    c = await cep(t)

    array.push(c.cep)
    array.push(c.street)
    array.push(c.neighborhood)
    array.push(c.city)
    array.push(c.state)
    array.push('Brazil')

    return array
}

async function InsertAdd(){
    
     for(i = 1924 ; i <= 2000; i ++){
        const j = await teste()

         const id           = i
         const zipcode      = j[0]
         const street       = j[1]
         const number       = RandomChoicer(600,1)
         const neighborhood = j[2]
         const city         = j[3]
         const state        = j[4]
         const country      = j[5]
         const created_at   = new Date()
         const updated_at   = created_at
        
        try{
            await Addresses.create({
                id,
                zipcode,
                street,
                number,
                neighborhood,
                city,
                state,
                country,
                created_at,
                updated_at
            })
            console.log('Novo endereço salvo')
        }
        catch (e){
            console.error(e)
        }   
    }  
}

InsertAdd()