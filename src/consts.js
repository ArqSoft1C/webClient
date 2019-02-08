export const GRAPHQL_URL = 'http://' + process.env.API_URL + ':' + process.env.API_PORT + '/' + process.env.API_ENTRY
//export const GRAPHQL_URL = "http://192.168.99.101:5000/graphql"
export const url = process.env.API_URL
export const port = process.env.API_PORT
export const entryPoint = process.env.API_ENTRY
console.log("HOST: "+ GRAPHQL_URL + " url:" + url)
