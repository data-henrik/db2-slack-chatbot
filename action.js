var ibmdb = require('ibm_db');
/**
  * Written by Henrik Loeser, IBM
  * The Db2 query is against the table as introduced in this Db2 and IBM Cloud tutorial:
  * https://console.bluemix.net/docs/tutorials/sql-database.html
  */

function queryDb2(dsn, queryparms) { 
 try {    
    var conn=ibmdb.openSync(dsn);
    var data=conn.querySync("select asciiname, countrycode,timezone, population from cities where name=? order by population desc",queryparms)
    conn.closeSync();
    return {result : data};
 } catch (e) {
     return { dberror : e }
 }
}

/**
  * Bind query parameter and dashDB (Db2 Warehouse on Cloud) credentials
  *
  */
function main({queryparms, __bx_creds: {dashDB:{dsn}}}) {  
	return queryDb2(dsn,queryparms);
}

