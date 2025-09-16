import { Heart } from "lucide-react";
import WhatImage from "../../public/What.png";

function What() {
  return (
    <section id="What" className="bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What is the <span className="text-teal-600">Pirarucu</span>?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The pirarucu, also called arapaima or paiche, is one of the
              largest freshwater fish in the world. It can reach over 2 meters
              in length and weigh more than 100 kilograms.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This ancient fish is known as the "cod of the Amazon" and is a
              valuable food fish. This remarkable fish has adapted to survive in
              environments that would challenge most aquatic species.
            </p>
            <div className="flex items-center gap-2 text-teal-600">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-medium">
                Ancient lineage dating back millions of years
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={WhatImage.src || WhatImage}
              alt="Pirarucu fish close-up"
              className="w-full h-full object-fit rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default What;
