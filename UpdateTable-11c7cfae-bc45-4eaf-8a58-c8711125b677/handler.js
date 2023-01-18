module.exports = dependencies => async function (event, context) {
    const item= JSON.parse(event.body);
    console.log(event.body)
    const res = await updateTable(event.pathParameters.farm_id,item,dependencies.ddb);
     
    console.log(event)  
    return {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
       statusCode: 200,
       body: JSON.stringify(res)
   }
    
};

async function updateTable(farm_id,item, ddb) {
      const params= {
        TableName: 'lambdaT',
       Item:{
           "farm_id":farm_id,
           "farm_name": item.farm_name,
           "city":item.city,
           "lat":item.lat,
           "log":item.log
       }
    }
    return ddb.put(params).promise()
}