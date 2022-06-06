const { names,sb } = require('../data/br_names')
const {emails,joins} = require('../data/emails')
const {Clients} = require('../../models/index')
const weighted = require('weighted')


function RandomChoicer(max, min = 0){
    let choice = Math.floor(Math.random() * (max - min) + min)
    return choice
}

function createName(){
    if((RandomChoicer(999,1) % 2 == 0)){
        return names[RandomChoicer(2000,0)]
    }
    else if((RandomChoicer(999,1) % 5 == 0)){
        return names[RandomChoicer(3000,0)]
    }
    else if((RandomChoicer(999,1) % 11 == 0)){
        return names[RandomChoicer(names.length,0)]
    }
    else{ 
        return names[RandomChoicer(1614,0)]
    }
}

function createPhone(){
    
    const ddd = {
        "81" : 80, 
        "87" : 10,
        "83" : 4,
        "82" : 4,
        "71" : 2
    }

    const number = {
        "ddd"     : weighted.select(ddd),
        "fnumber" : 6,
        "final"   : RandomChoicer(99999999,10000000)
    }

    return Number(number.ddd + number.fnumber + number.final)
}

function createCpf(){

   cpf = {
    "digits" : String(RandomChoicer(999999999,111111111)),
    "region" : String(RandomChoicer(10)),
    "final" : String(RandomChoicer(1000))
   }

   return `${cpf.digits}${cpf.region}${cpf.final}`
}

function createEmail(name_com){

    const sep = {
        '.' : 50,
        '_' : 50
    }

    const n_c = name_com.nome

    if(RandomChoicer(999,1) % 2 != 0){
        return String(n_c.toLowerCase() + weighted.select(sep) + weighted.select(joins) + '@' +  weighted.select(emails))
    }
    else if(RandomChoicer(999,1) % 5 == 0){
        return String(n_c.slice(2).toLowerCase() + weighted.select(sep) + weighted.select(joins) + "@" +  weighted.select(emails))
    }
    else{
        return String(n_c.toLowerCase() + "@" + weighted.select(emails))
    }
}

function setFullName(name){
    if(name.freq >= 4700){
        return name.nome + " " + sb[RandomChoicer(sb.length + 1)]
    }
    if(name.freq <= 2000){
        return name.nome + " " + sb[RandomChoicer(sb.length + 1)] + " " + sb[RandomChoicer(sb.length + 1)] + " " + sb[RandomChoicer(sb.length + 1)]
    }
    else{ 
        return name.nome + " " + sb[RandomChoicer(sb.length + 1)] + " " +  sb[RandomChoicer(sb.length + 1)] 
    }
}

async function insertClient(){

    for(i = 1; i <= 1987; ++i){
        const f_name = createName()

        const id          = i
        const full_name   = setFullName(f_name)
        const email       =  createEmail(f_name)
        const doc_type_id = 1
        const doc_number  = createCpf()
        const address_id  = i 
        const birth_date  = new Date(RandomChoicer(1072922400000,-1262293200000))
        const phone       = createPhone()

        try{
            await Clients.create({
                id,
                full_name,
                email,
                doc_type_id,
                doc_number,
                address_id,
                birth_date,
                phone
            })
            console.log('Client added')
        }
        catch(e){
            console.error(e)
        }
    }
   
}

insertClient()
