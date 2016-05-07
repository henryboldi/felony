import low from 'lowdb'
import storage from 'lowdb/file-async'
import path from 'path'
import os from 'os'
import underscoreDB from 'underscore-db'

const dbPath = path.join(os.homedir(), 'felony.json')
const db = low(dbPath, { storage })

db._.mixin(underscoreDB)

export default db
