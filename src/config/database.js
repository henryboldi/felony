import low from 'lowdb'
import path from 'path'
import os from 'os'

const dbPath = path.join(os.homedir(), 'felony.json')
const db = low(dbPath)

export default db
