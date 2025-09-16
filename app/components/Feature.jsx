import { Ruler, Weight, Clock, Shield } from 'lucide-react';

function Feature() {
  return (
    <section id="feature" className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2+ meters</h3>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Weight className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100+ kg</h3>
            <p className="text-gray-600 text-sm">Weight</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">15-20 min</h3>
            <p className="text-gray-600 text-sm">Air breathing</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Armored</h3>
            <p className="text-gray-600 text-sm">Scales</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;