
import { prisma } from '../src/lib/prisma'



async function seed() {
    await prisma.event.create({
        data: {
            id: '110b4807-43da-407e-8e1f-571671183084',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento de programação',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect()
})