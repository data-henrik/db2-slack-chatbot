# Slack Chatbot with a Db2 Backend
This repository contains code snippets to build a Slack chatbot backed by IBM Watson Conversation. Depending on the dialog, data is fetched from a Db2 database.

The Slack chatbot uses the [Conversation Connector](https://github.com/watson-developer-cloud/conversation-connector/) which is based on IBM Cloud Functions and Cloudant. The IBM Cloud Functions provide a serverless messaging channel between Slack and Watson Conversation. The Cloudant datbase is utilized to store messaging contexts.

IBM Cloud Functions are also used to access Db2 directly from dialog nodes via dialog actions.

## Files
* [action.js](action.js): Action for IBM Cloud Function (ICF / OpenWhisk) to perform a parameterized query against Db2.
* [insert-action.js](insert-action.js): Action for IBM Cloud Function (ICF / OpenWhisk) to insert a single row into a Db2 table.
* [dialog-node.json](dialog-node.json): JSON version of a dialog node showing the call to the ICF action.




