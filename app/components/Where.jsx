import { MapPin, Waves, Thermometer } from "lucide-react";
import Live from "../../public/Live.png";

function Where() {
  return (
    <section id="Where" className="bg-gradient-to-r from-teal-700 to-slate-800 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={Live.src || Live}
              alt="Pirarucu habitat in the Amazon"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="h-full flex flex-col justify-center items-start ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Does It <span className="text-teal-300">Live?</span>
            </h2>
            <p className="text-teal-100 mb-6 leading-relaxed">
              The pirarucu is native to the Amazon Basin in South America. It
              inhabits rivers, lakes, and flooded forests, often in slow-moving
              waters with low oxygen levels.
            </p>
            <p className="text-teal-100 mb-8 leading-relaxed">
              These are places where they fish would struggle to survive, but
              the pirarucu has evolved unique adaptations that allow it to
              thrive in these challenging environments.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-300" />
                <span>Rivers and lakes of the Amazon Basin</span>
              </div>
              <div className="flex items-center gap-3">
                <Waves className="w-5 h-5 text-teal-300" />
                <span>Flooded forest areas during wet season</span>
              </div>
              <div className="flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-teal-300" />
                <span>Low-oxygen, slow-moving waters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Where;
