import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

async function check() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({ collection: 'projects' })
  console.log(`Found ${projects.length} projects:`)
  projects.forEach(p => console.log(` - ${p.name}`))
  process.exit(0)
}

check()
