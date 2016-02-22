import low from 'lowdb'
import storage from 'lowdb/file-async'
import path from 'path'
import os from 'os'

const dbPath = path.join(os.homedir(), 'felony.json')
const db = low(dbPath, { storage })

export default db
