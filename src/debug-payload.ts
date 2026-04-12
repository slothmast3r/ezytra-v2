import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

async function debug() {
  console.log('Connecting to:', process.env.DATABASE_URL?.split('@')[1] || 'NOT FOUND')
  
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({ 
    collection: 'projects',
    overrideAccess: true 
  })
  
  console.log('--- Payload Debug ---')
  console.log('Project Count:', projects.length)
  projects.forEach(p => console.log(`Project: ${p.name}`))
  process.exit(0)
}

debug().catch(e => {
  console.error(e)
  process.exit(1)
})
