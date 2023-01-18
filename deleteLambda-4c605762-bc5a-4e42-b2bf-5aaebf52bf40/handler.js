module.exports = dependencies => async function (event, context) {
       let res = await deleteItem(event.pathParameters.farm_id,dependencies.ddb)
       console.log(event)
       if(res){
       const response = {
           headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
           },
           body: JSON.stringify("Farm Deleted")
       }
       return response
       }
};

function deleteItem(farm_id,ddb){
    return ddb.delete({
      TableName:"lambdaT",
      Key:{
        farm_id: farm_id
      }
      }).promise();
}