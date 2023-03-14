import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Categories
  await prisma.gameCategory.createMany({
    data: [
      { name: 'Shooter' },
      { name: 'Sports' },
      { name: 'RPG' },
      { name: 'Arcade' },
    ],
    skipDuplicates: true,
  });

  await prisma.address.createMany({
    data: [
      {
        line1: 'Central Perk',
        line2: '',
        city: 'New York',
        country: 'US',
      },
      {
        line1: 'Donnow',
        line2: 'bruh',
        city: 'South',
        country: 'Africa',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: [
      { email: 'john.doe@gmail.com', name: 'John Doe', addressId: 1 },
      { email: 'elon.musk@gmail.com', name: 'Elon Musk', addressId: 2 },
    ],
    skipDuplicates: true,
  });

  await prisma.game.createMany({
    data: [
      {
        name: 'COD Mobile',
        description:
          'In it, a team of four players have to survive and protect their teleportation device from continuous waves of zombies. During the day, players have to collect supplies which would be used during the night to survive against a horde of zombies.',
        imageUrl:
          'https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg',
        categoryId: 1, // Shooter
      },
      {
        name: 'PES 2023',
        description:
          'The game was developed by Konami Computer Entertainment Tokyo and was released in 1996. The first Winning Eleven game, without the World Soccer prefix, was J.',
        imageUrl: 'https://i.ytimg.com/vi/901CbZKXkaE/maxresdefault.jpg',
        categoryId: 2, // Sports
      },
      {
        name: 'The Legend of Zelda: Breath of the Wild',
        description:
          'A young boy named Link must travel to Death Mountain and defeat the pig-like monster, Ganon, to restore peace to the kingdom of Hyrule. A teenage Link embarks on a journey to awaken the sleeping maiden, Zelda, and learn the origin of the Triforce.',
        imageUrl:
          'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
        categoryId: 3, // RPG
      },
      {
        name: 'Donkey Kong',
        description:
          'Donkey Kong is a video game franchise created by Shigeru Miyamoto and owned by Nintendo. It follows the adventures of a gorilla named Donkey Kong and his ape and monkey friends. The franchise primarily consists of platform games—originally single-screen action puzzle games and later side-scrolling platformers.',
        imageUrl: 'https://images.nintendolife.com/d01774d77f34e/1280x720.jpg',
        categoryId: 4, // Arcade
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
