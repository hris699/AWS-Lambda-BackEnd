
module.exports = dependencies => async function (event, context) {
  let Farms = JSON.parse(event.body)
        console.log(Farms)
     let res = await save(Farms,dependencies.ddb);
    return  {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
       statusCode: 200,
       body: JSON.stringify('Successfull')
   }
};

async function save(item, ddb) {
      return ddb.put({
        TableName: 'lambdaT',
        Item: item,
    }).promise();
}
