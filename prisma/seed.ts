import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstname: 'Lionel',
    lastname: 'Messi',
    email: 'lionel.messi@gmail.com',
    password: 'motdepasse',
    posts: {
      create: [
        {
          content: 'https://www.psg.fr/',
        },
      ],
    },
  },
  {
    firstname: 'Kylian',
    lastname: 'Mbappé',
    email: 'kylian.mbappe@gmail.com',
    password: 'motdepasse',
    posts: {
      create: [
        {
          content: 'https://www.psg.fr/',
        },
      ],
    },
  },
  {
    firstname: 'Neymar',
    lastname: 'da Silva Santos Júnior',
    email: 'neymar.dasilvasantosjunior@gmail.com',
    password: 'motdepasse',
    posts: {
      create: [
        {
          content: 'https://www.psg.fr/',
        },
        {
          content: 'https://www.psg.fr/',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
