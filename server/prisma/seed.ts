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
        categoryId: 1, // Shooter
      },
      {
        name: 'PES 2023',
        categoryId: 2, // Sports
      },
      {
        name: 'The Legend of Zelda: Breath of the Wild',
        categoryId: 3, // RPG
      },
      {
        name: 'Donkey Kong',
        categoryId: 4, // Arcade
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
