import { Wind, Shield, Crown } from "lucide-react";

function Special() {
  return (
    <section className="bg-gray-50 py-8 md:py-16 px-4" id="Special">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Makes It <span className="text-teal-600">Special</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The pirarucu possesses remarkable adaptations that set it apart from
            virtually every other fish species on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="bg-teal-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Wind className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">
              Air Breathing
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Unlike most fish, the pirarucu can breathe air directly from the
              surface, allowing it to survive in low-oxygen waters using a
              modified swim bladder that functions like a lung.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
              Armored Scales
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Its scales are incredibly tough and provide excellent protection
              from other predators in the Amazon. These scales have been
              compared to armor plating.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Crown className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">
              Apex Predator
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              As one of the largest predators in its environment, the pirarucu
              sits at the top of the aquatic food chain, hunting other fish and
              even caiman.
            </p>
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Living Fossil</h3>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The pirarucu is considered a 'living fossil' - its basic body plan
            has remained virtually unchanged for over 23 million years.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Special;