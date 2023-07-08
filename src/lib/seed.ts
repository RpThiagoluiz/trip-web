import { prisma } from '../lib/prisma';

async function main() {
  await prisma.trip.createMany({
    data: [
      {
        name: 'Hotel Aurora',
        description:
          'The Hotel Aurora is a charming retreat nestled amidst majestic mountains. With its lush gardens and elegant architecture, Aurora offers spacious and beautifully decorated rooms, award-winning cuisine, a luxurious spa, and a variety of leisure facilities. It is the perfect place for travelers seeking a relaxing and rejuvenating getaway, providing a memorable experience in a stunning setting.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Amalfi, Itália',
        countryCode: 'IT',
        coverImage:
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
          'https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 25000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: 'Hotel Palace',
        description:
          'The Hotel Palace is a gem of hospitality, a symbol of luxury and elegance. Located in a privileged location, the hotel offers guests a truly magnificent experience. With stunning rooms, sophisticated decor, and breathtaking panoramic views, the Palace captivates its visitors from the moment they step in. Impeccable services and attention to detail ensure an unforgettable stay, while exquisite restaurants and elegant bars satisfy the most discerning palates. With a wide range of leisure facilities, including a spa, gym, and stunning pools, the Hotel Palace offers an unparalleled luxury experience for those seeking the pinnacle of hospitality and comfort.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'New York, Estados Unidos',
        countryCode: 'US',
        coverImage:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 35000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: true,
        maxGuests: 4,
      },
      {
        name: 'Royal Oasis',
        description:
          'The Royal Oasis is an exclusive luxury hotel that combines imposing architecture, refined decor, and high-quality services to provide its guests with an unparalleled experience. With spacious rooms, gourmet restaurants, wellness facilities, and impeccable service, this haven of tranquility and elegance is the perfect place for those seeking the best in comfort and sophistication.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Florença, Itália',
        countryCode: 'IT',
        coverImage:
          'https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 40000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: true,
        maxGuests: 2,
      },
      {
        name: 'Azure Haven Retreat',
        description:
          'The Azure Haven Retreat is a luxury oasis located on a private island, where the crystal-clear waters of the ocean meet untouched white sandy beaches. With contemporary and elegant architecture, this exclusive hotel offers its guests a tranquil and sophisticated retreat experience. The spacious and meticulously decorated rooms and suites provide a serene ambiance, while the world-class restaurants offer exquisite cuisine with fresh ingredients and international flavors. Additionally, the Azure Haven Retreat offers a variety of leisure activities such as diving, yachting, and relaxation in a luxurious spa, ensuring an unforgettable luxury beach experience.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Lago Sereno, Suíça',
        countryCode: 'CH',
        coverImage:
          'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 60000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: 'Palazzo Sereno',
        description:
          "Palazzo Sereno is a luxury hotel located in a historic city in Europe. With stunning architecture and an elegant ambiance, the hotel offers guests an exclusive experience of comfort and sophistication. The exquisitely decorated rooms provide a peaceful retreat, while the high-quality services ensure an unforgettable stay. With its privileged location, Palazzo Sereno allows guests to explore the city's attractions and experience the local culture with ease. A stay at this hotel is a true experience of luxury and refinement.",
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Madrid, Espanha',
        countryCode: 'ES',
        coverImage:
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 40200,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: 'Mountain Peak Lodge',
        description:
          "Mountain Haven Retreat is a luxury boutique hotel located in a serene mountainous region, surrounded by breathtaking landscapes and tranquility. With elegantly decorated rooms, the hotel offers guests a comfortable and relaxing stay amidst untouched nature. Guests can enjoy gourmet meals prepared with fresh, local ingredients at the hotel's restaurant while taking in stunning mountain views. With access to hiking trails, outdoor activities, and a relaxing spa, Mountain Haven Retreat provides its guests with a luxurious experience in a natural and charming sanctuary.",
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Montreal, Canadá',
        countryCode: 'CA',
        coverImage:
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 70500,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: 'Encanto da Serra',
        description:
          'Recanto Sereno is a charming inn located in a small coastal town on the southern coast of Brazil. With a cozy and family-friendly atmosphere, the inn offers guests a tranquil and relaxing stay. The rooms are comfortable and well-decorated, providing a cozy retreat. Guests can enjoy a delicious breakfast with homemade and regional options, served with care. Additionally, Recanto Sereno is a short walk from the beach, allowing guests to enjoy moments of rest and leisure by the seaside. With a friendly and attentive staff, Recanto Sereno provides its guests with a relaxing and memorable stay in a serene environment on the Brazilian coast.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Oslo, Noruega',
        countryCode: 'NO',
        coverImage:
          'https://images.unsplash.com/photo-1610530531783-56a4e92a3305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 33000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: 'Rancho Sereno',
        description:
          'Rancho Sereno is a charming farmhouse located in a peaceful rural area. With simple and cozy accommodations, the ranch offers visitors an authentic countryside experience. Guests can enjoy moments of peace and tranquility amidst lush nature, taking advantage of hiking trails, horseback riding, and outdoor activities.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Amsterdam, Holanda',
        countryCode: 'NL',
        coverImage:
          'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1596753365498-2d23bbfcbc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1512237798647-84b57b22b517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1509826069158-41fafc8a4a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80',
        ],
        pricePerDay: 10000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: 'Chalé Serenidade',
        description:
          'Chalé Serenidade is a charming retreat nestled in a picturesque mountainous area. With its charming architecture and cozy ambiance, the chalet offers guests a peaceful and relaxing stay. The rooms are cozy and well-decorated, providing a pleasant environment to rest and appreciate the beauty of the surrounding nature. Guests can enjoy moments of tranquility by the fireplace or explore nearby trails. With its secluded location, Chalé Serenidade is perfect for those seeking a serene and welcoming mountain getaway.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'Paris, França',
        countryCode: 'FR',
        coverImage:
          'https://images.unsplash.com/photo-1515496281361-241a540151a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        imagesUrl: [
          'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1614267157481-ca2b81ac6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ],
        pricePerDay: 20000,
        highlights: [
          'Included breakfast',
          'Swimming pool',
          'Free Wi-Fi',
          'Free parking',
          'Paradisiacal view',
          'Luxurious',
        ],
        recommended: false,
        maxGuests: 3,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
