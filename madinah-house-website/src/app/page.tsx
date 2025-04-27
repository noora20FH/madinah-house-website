
import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Madinah House - Premium Boarding Service</title>
        <meta name="description" content="Premium boarding service in a comfortable environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-home text-2xl text-yellow-500 mr-2"></i>
            <span className="text-xl font-bold text-gray-800">Madinah House</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-yellow-500">Home</a>
            <a href="#room" className="text-gray-800 hover:text-yellow-500">Rooms</a>
            <a href="#facility" className="text-gray-800 hover:text-yellow-500">Facilities</a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-500">Contact</a>
          </div>
          <button className="md:hidden text-gray-800">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Madinah House</h1>
            <p className="text-xl md:text-2xl mb-8">Premium Boarding Service in a Comfortable Environment</p>
            <a 
              href="#room" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
            >
              Explore Rooms
            </a>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=cover&w=2070&q=80" 
          alt="Madinah House" 
          className="w-full h-full object-cover" 
        />
      </section>

      {/* Room Section */}
      <RoomSection />
      
      {/* Facility Section */}
      <FacilitySection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

const RoomSection = () => {
  const rooms = [
    {
      title: "Standard Room",
      description: "Perfect for students and young professionals looking for affordable accommodation.",
      image: "https://images.unsplash.com/photo-1582719471019-5b0b1b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=cover&w=2070&q=80",
      facilities: [
        "Single bed",
        "Shared bathroom",
        "Study table",
        "Wardrobe",
        "Free WiFi"
      ],
      price: "From $200/month"
    },
    {
      title: "Deluxe Room",
      description: "Spacious room with additional amenities for more comfort and privacy.",
      image: "https://images.unsplash.com/photo-1582719471019-5b0b1b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=cover&w=2070&q=80",
      facilities: [
        "Queen size bed",
        "Private bathroom",
        "Study table & chair",
        "Wardrobe & dresser",
        "Mini fridge",
        "Free WiFi"
      ],
      price: "From $350/month"
    },
    {
      title: "Executive Suite",
      description: "Luxurious accommodation with premium facility for discerning residents.",
      image: "https://images.unsplash.com/photo-1582719471019-5b0b1b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=cover&w=2070&q=80",
      facilities: [
        "King size bed",
        "Ensuite bathroom with shower",
        "Study area with desk",
        "Walk-in wardrobe",
        "Mini fridge & microwave",
        "Flat screen TV",
        "Premium WiFi",
        "Daily cleaning service"
      ],
      price: "From $550/month"
    }
  ];

  return (
    <section id="room" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Room Type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
              <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800">Facility:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {room.facilities.map((facility, i) => (
                      <li key={i}>{facility}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-yellow-500 font-bold">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FacilitySection = () => {
  const facilities = [
    {
      icon: "utensils",
      title: "Dining Area",
      description: "Spacious dining area with communal kitchen facility for preparing meal."
    },
    {
      icon: "wifi",
      title: "High-Speed WiFi",
      description: "Reliable high-speed internet access throughout the property."
    },
    {
      icon: "water",
      title: "Laundry Service",
      description: "On-site laundry facility with washing machine and dryer."
    },
    {
      icon: "book",
      title: "Study Lounge",
      description: "Quiet study area with comfortable seating and ample lighting."
    },
    {
      icon: "dumbbell",
      title: "Fitness Area",
      description: "Basic exercise equipment for residents to stay active."
    },
    {
      icon: "parking",
      title: "Secure Parking",
      description: "Designated parking space available for residents."
    }
  ];

  return (
    <section id="facility" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Facility</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-yellow-500 mb-4">
                <i className={`fas fa-${facility.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Interested in booking a room or have question about our facility? 
              Contact us using the information below or send us a message.
            </p>
            
            <div className="space-y-4">
              <ContactItem 
                icon="map-marker-alt" 
                title="Address" 
                content="123 Madinah Street, City Center, 12345" 
              />
              <ContactItem 
                icon="phone-alt" 
                title="Phone" 
                content="+1 (123) 456-7890" 
              />
              <ContactItem 
                icon="envelope" 
                title="Email" 
                content="info@madinahhouse.com" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Send a Message</h3>
            <form className="space-y-4">
              <InputField id="name" label="Name" type="text" />
              <InputField id="email" label="Email" type="email" />
              <InputField id="phone" label="Phone" type="tel" />
              <TextAreaField id="message" label="Message" rows={4} />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content }: { icon: string; title: string; content: string }) => (
  <div className="flex items-start">
    <i className={`fas fa-${icon} text-yellow-500 text-xl mt-1 mr-4`}></i>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const InputField = ({ id, label, type }: { id: string; label: string; type: string }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 mb-1">{label}</label>
    <input 
      type={type} 
      id={id} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
    />
  </div>
);

const TextAreaField = ({ id, label, rows }: { id: string; label: string; rows: number }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 mb-1">{label}</label>
    <textarea 
      id={id} 
      rows={rows} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
    />
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center">
            <i className="fas fa-home text-2xl text-yellow-500 mr-2"></i>
            <span className="text-xl font-bold">Madinah House</span>
          </div>
          <p className="text-gray-400 mt-2">Premium boarding service in a comfortable environment.</p>
        </div>
        
        <div className="flex space-x-6">
          <SocialIcon icon="facebook-f" />
          <SocialIcon icon="twitter" />
          <SocialIcon icon="instagram" />
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2023 Madinah House. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const SocialIcon = ({ icon }: { icon: string }) => (
  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
    <i className={`fab fa-${icon} text-xl`}></i>
  </a>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/1234567890" 
    className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="fab fa-whatsapp text-3xl"></i>
  </a>
);

export default HomePage;
