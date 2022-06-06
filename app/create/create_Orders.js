const {v4: uuidv4} = require('uuid')
const {Orders}  = require('../../models/index')
const weighted = require('weighted')

function RandomChoicer(max, min = 0){
    let choice = Math.floor(Math.random() * (max - min) + min)
    return choice
}

function setDesc(qtd){

    desc = {
        "air": 15,
        "nautical": 5,
        "industry": 10,
        "automotive" : 40,
        "residential": 5
    }
    return RandomChoicer(999999999,11111111) + '*' + weighted.select(desc) + '*' + qtd
}

function setService(){

    service = {
        "remodeling": 10,
        "coating"  : 20,
        "recovery" : 40,
        "confection": 50,
    }

    return weighted.select(service)
}

async function insertOrders(){

    for(i = 1; i <= 2300; ++i){
        
        const sts = {
            'concluded' : 80, 
            'in progress' : 20
        }

        const id = i 
        const client_id = RandomChoicer(1988,1)
        const service_ = setService()
        const amount_itens = RandomChoicer(7,1)
        const description = setDesc(amount_itens)
        const procedure_id = uuidv4()
        const payment_id = uuidv4()
        const status = weighted.select(sts)
        const created_at = new Date()
        const updated_at = created_at

        try{
            await Orders.create({
                id,
                client_id,
                service_,
                amount_itens,
                description,
                procedure_id,
                payment_id,
                status,
                created_at,
                updated_at
            })
            console.log('New order generated')
        }
        catch(e){
            console.error(e)
        }
    }
}

insertOrders()