import React from "react";

export default function Partners() {
  return (
    <>
      <section className="" id="partners">
        <div className="md:grid grid-cols-3 container py-20 md:p-40">
          <div>
            <h1 className="text-3xl uppercase font-bold">OEM & Partners</h1>
            <p className="text-xl">
              We develop strategic collaborations with leading global OEMs and
              solution partners.
            </p>
          </div>
          <div className="col-span-2 pt-10 md:pt-0">
            <h1 className={`text-2xl uppercase`}>Turkish Partners</h1>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-700 h-24 rounded-lg"></div>
              <div className="bg-gray-700 h-24 rounded-lg"></div>
              <div className="bg-gray-700 h-24 rounded-lg"></div>
              <div className="bg-gray-700 h-24 rounded-lg"></div>
              <div className="bg-gray-700 h-24 rounded-lg"></div>
              <div className="bg-gray-700 h-24 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
}
