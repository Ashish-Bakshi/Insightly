import prisma from "../server/utils/prisma.js"

async function main() {
  // Step 1: Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'ashish@example.com',
      firstName: 'Ashish',
      lastName: 'Bakshi',
      password: 'hashedpassword123', // use bcrypt in real app
      agreedToTerms: true, // Assuming user agreed to terms
      termsAcceptedAt: new Date(), // Set the current date and time for terms acceptance
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'anotherhashedpassword',
    },
  });

  // Step 2: Create Articles separately and assign to user1
  await prisma.article.createMany({
    data: [
      {
        title: 'Welcome to Insightly',
        content: 'This is your first article.',
        authorId: user1.id, // reference to user1
      },
      {
        title: 'Exploring PostgreSQL with Prisma',
        content: 'Learn how to use Prisma ORM with Postgres.',
        authorId: user1.id,
      },
    ],
  });

  console.log('✅ Seeded users and articles separately!');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('❌ Seed Error:', e);
    prisma.$disconnect();
    process.exit(1);
  }); 