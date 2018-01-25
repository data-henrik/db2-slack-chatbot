var ibmdb = require('ibm_db');
/**
  * Node.js action showing how to insert into a Db2 table.
  * Data is passed in via confvalues.
  * Db2 credentials are obtained by binding the Db2 service to the action.
  *
  * Written by Henrik Loeser
  */

function insertConference(dsn, confvalues) { 
 try {    
    var conn=ibmdb.openSync(dsn);
    var data=conn.querySync("insert into conference(shortname, location, begindate, enddate, uri) values(?,?,?,?,?)", confvalues);
    conn.closeSync();
    return {result : data};
 } catch (e) {
     return { dberror : e }
 }
}
  
function main({confvalues, __bx_creds: {dashDB:{dsn}}}) {
    
	return insertConference(dsn,confvalues);
}
