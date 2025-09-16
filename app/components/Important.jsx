import { Users, Leaf, Globe, Heart } from "lucide-react";
import ImportantImage from "../../public/Important.png";

function Important() {
  return (
    <section id="Important" className="bg-slate-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Is It <span className="text-teal-400">Important</span>?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              For Amazonian communities, the pirarucu is a vital food source and
              cultural symbol. Today, it's also a focus of conservation efforts.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Sustainable fishing programs have been developed to ensure the
              species' survival while supporting local communities that depend
              on this remarkable fish for their livelihood.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Food Security</h4>
                  <p className="text-sm text-gray-400">
                    Essential protein source for local communities
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Conservation</h4>
                  <p className="text-sm text-gray-400">
                    Sustainable management programs protect the species
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Cultural Heritage</h4>
                  <p className="text-sm text-gray-400">
                    Integral part of Amazonian traditions and folklore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
              <img
                src={ImportantImage.src || ImportantImage}
                alt="Conservation efforts and local fishermen"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
      </div>
    </section>
  );
}

export default Important;
