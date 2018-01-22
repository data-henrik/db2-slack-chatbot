var ibmdb = require('ibm_db');
/**
  *
  * main() will be invoked when you Run This Action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  * Written by Henrik Loeser, IBM
  * The Db2 query is against the table as introduced in this Db2 and IBM Cloud tutorial:
  * https://console.bluemix.net/docs/tutorials/sql-database.html
  */

function queryDb2(params) { 
 try {    
    var conn=ibmdb.openSync(params.connectionString);
    var data=conn.querySync("select asciiname, countrycode,timezone, population from cities where name=? order by population desc",params.queryparms)
    conn.closeSync();
    return {result : data};
 } catch (e) {
     return { dberror : e }
 }
}
  
function main(params) {
    
	return queryDb2(params);
}

