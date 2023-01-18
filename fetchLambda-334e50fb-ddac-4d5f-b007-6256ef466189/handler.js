module.exports = dependencies => async function (event, context) {


let response =  await farmName(event.pathParameters.farm_id,dependencies.ddb)

// await farmName(event.pathParameters.farm_id,dependencies.ddb);
   return {
       statusCode: 200,
       body: JSON.stringify(response)
   }
    
};

async function farmName(farm_id,ddb){
      let params = {
        TableName: 'lambdaT',
        KeyConditionExpression: '#farm_id = :farm_id',
        ExpressionAttributeNames: {
            "#farm_id": 'farm_id',
        },
        ExpressionAttributeValues: {
            ":farm_id": farm_id,
        }
};
        return ddb.query(params).promise();
}

