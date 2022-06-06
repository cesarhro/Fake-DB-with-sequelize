const {v4: uuidv4} = require('uuid')
const {Payments} = require('../../models/index')
const {p_id}  = require('../data/payment_id')

function RandomChoicer(max, min = 0){
    let choice = Math.floor(Math.random() * (max - min) + min)
    return choice
}

async function insertPayments(){

    for(i = 1; i <= 2300; ++i){
        const date = new Date(RandomChoicer(new Date().getTime(),1414893600000))

        const id = p_id[i]
        const order_id = i
        const value = RandomChoicer(30000,250)
        const client_id = RandomChoicer(1988,1)
        const payment_type_id = RandomChoicer(8,1)
        const status = 'accepted'
        const transaction_id = uuidv4()
        const created_at = date
        const updated_at = created_at

        try{
            await Payments.create({
                id,
                order_id,
                value,
                client_id,
                payment_type_id,
                status,
                transaction_id,
                created_at,
                updated_at
            })
            console.log('new payment registered')
        }
        catch(e){
            console.error(e)
        }
    }
}

insertPayments()