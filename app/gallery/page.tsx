import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/gallery/event1.jpg",
    "/gallery/event2.jpg",
    "/gallery/event3.jpg",
    "/gallery/event4.jpg",
    "/gallery/event5.jpg",
    "/gallery/event6.jpg",
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Gallery
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Explore memorable moments from workshops, hackathons,
        community meetups and Techalfa events.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden"
          >
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </div>

    </main>
  );
}