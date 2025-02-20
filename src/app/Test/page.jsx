import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <Head>
        <title>Animated Card</title>
        <meta name="description" content="A card with hover animation using Tailwind CSS." />
      </Head>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full transform transition duration-500 hover:scale-105 hover:shadow-xl">
        {/* Image */}
        <img
          src="https://via.placeholder.com/400x200"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">Card Title</h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            This is a simple card with a title, image, and description. Hover over the card to see the animation.
          </p>
        </div>
      </div>
    </div>
  );
}