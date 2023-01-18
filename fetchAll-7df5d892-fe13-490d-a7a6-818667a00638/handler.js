module.exports = dependencies => async function (event, context) {


let response = await farmName(dependencies.ddb);
    return  {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
       statusCode: 200,
       body: JSON.stringify(response)
   }
}

async function farmName(ddb){
    
    let params={
        TableName: 'lambdaT',
    }
    
    return ddb.scan(params).promise()
}