const {Internal_Procedures} = require('../../models/index.js')
const moment = require('moment')

function tests_Id(id){
    if(!id){
        return 'id é obrigatório'
    }

    const verifyUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    const testUUID = verifyUUID.test(id)

    if(testUUID = false){
        return 'id precisar ser UUID'
    }
}

async function InsertInternal_Procedures(values){
    const id = values[0];
    const order_id = values[1];
    const procedure_type_id = values[2];
    const department_id = values[3]; 
    const employee_id = values[4];
    const status = values[5];
    const created_at = values[6];
    const updated_at = values[7];


    const tests =[tests_Id(id) /*tests_order_id(order_id), tests_procedure_type_id(procedure_type_id), tests_department_id(department_id), tests_employee_id(employee_id),tests_status(status),test_date(created_at,updated_at)*/]

    for(test of tests){
        const insert = tests[test]
        console.log(insert)
    }

    try{
        await Internal_Procedures.create({
            id,
            order_id, 
            procedure_type_id,
            department_id,
            employee_id,
            status,
            created_at,
            updated_at
        })
    }
    catch(e){
        console.error(e.message);
    }
}

array = [,'7819d9fc-9b7e-4461-a983-a05a8c1e6abd']

InsertInternal_Procedures(array)
