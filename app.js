const { createConnection } = require('mysql2')
const { prompt } = require('inquirer') 
require('console.table')

const db = createConnection('mysql://root:rootroot@localhost/employees_db')

const mainMenu = () => {
  prompt ({
    
  })
}