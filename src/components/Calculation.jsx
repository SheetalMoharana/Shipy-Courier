import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { assets } from "../assets/assets";

const Calculation = () => {
  const [boxes, setBoxes] = useState([
    { weight: "", unit: "g", l: "", b: "", h: "", count: "" },
  ]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: "", unit: "g", l: "", b: "", h: "", count: "" },
    ]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const handleBoxChange = (index, field, value) => {
    const updated = [...boxes];
    updated[index][field] = value;
    setBoxes(updated);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">

        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Calculate Your Shipping Price
          </h2>

          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <select className="input">
              <option>Surface</option>
              <option>Air</option>
            </select>

            <select className="input">
              <option>Forward</option>
              <option>Reverse</option>
            </select>

            <input className="input" placeholder="Origin Pincode" />
            <input className="input" placeholder="Destination Pincode" />

            <input className="input" placeholder="COD Amount" />
            <select className="input">
              <option>COD</option>
              <option>Prepaid</option>
            </select>
          </div>

         
          <div className="space-y-4">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-4 relative"
              >
                {index > 0 && (
                  <button
                    onClick={() => removeBox(index)}
                    className="absolute top-3 right-3 text-red-500 hover:scale-110"
                  >
                    <X size={18} />
                  </button>
                )}

                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <input
                    className="input"
                    placeholder="Weight"
                    value={box.weight}
                    onChange={(e) =>
                      handleBoxChange(index, "weight", e.target.value)
                    }
                  />

                  <select
                    className="input"
                    value={box.unit}
                    onChange={(e) =>
                      handleBoxChange(index, "unit", e.target.value)
                    }
                  >
                    <option>g</option>
                    <option>kg</option>
                  </select>

                  <input
                    className="input"
                    placeholder="L (cm)"
                    value={box.l}
                    onChange={(e) =>
                      handleBoxChange(index, "l", e.target.value)
                    }
                  />

                  <input
                    className="input"
                    placeholder="B (cm)"
                    value={box.b}
                    onChange={(e) =>
                      handleBoxChange(index, "b", e.target.value)
                    }
                  />

                  <input
                    className="input"
                    placeholder="H (cm)"
                    value={box.h}
                    onChange={(e) =>
                      handleBoxChange(index, "h", e.target.value)
                    }
                  />

                  <input
                    className="input"
                    placeholder="Count"
                    value={box.count}
                    onChange={(e) =>
                      handleBoxChange(index, "count", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={addBox}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-green-500 text-green-600 hover:bg-green-50"
            >
              <Plus size={18} /> Add More Boxes
            </button>

            <button className="px-8 py-3 rounded-full bg-green-500 text-white hover:bg-green-600">
              Submit & Compare
            </button>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img src={assets.calculation} alt="Shipping Illustration" className="max-w-md w-full"/>
        </div>
      </div>
    </section>
  );
};

export default Calculation ;
