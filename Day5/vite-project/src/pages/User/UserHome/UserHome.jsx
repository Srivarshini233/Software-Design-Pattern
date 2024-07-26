import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./UserHome.css"; // Import your custom styles

const UserHome = () => {
  const user = { name: "Sri❤" }; // Replace with actual user data

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Toy Store</div>
          <div className="text-lg">Welcome, {user.name}</div>
        </div>
      </nav>

      <div className="container mx-auto mt-8">
        <div className="w-full h-[50vh] relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="rounded-lg overflow-hidden h-full"
          >
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/be/e3/07/bee3078d2c16148ca17baa10e76ffa05.jpg"
                alt="Toy 1"
              />
              <p className="legend">Lego Star Wars</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/originals/05/8f/b7/058fb78ed82c2ab9212506d13e863a8c.png"
                alt="Toy 2"
              />
              <p className="legend">Barbie Dreamhouse</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/564x/24/0f/6a/240f6a88ff80bf6c12cd2781dd16d4f7.jpg"
                alt="Toy 3"
              />
              <p className="legend">Hot Wheels Track</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
