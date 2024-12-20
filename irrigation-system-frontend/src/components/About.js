import React from "react";

const teamMembers = [
  {
    name: "Tesfamikael Almaw",
    Dep: "Software Engineer",
    image: "/asset/profile1.jpg",
  },
  {
    name: "Tamrat Demse",
    Dep: "Software Engineer",
    image: "/asset/profile1.jpg",
  },
  {
    name: "Alazar  Gebre ",
    Dep: "Software Engineer",
    image: "/asset/profile1.jpg",
  },
  {
    name: "Abenezer Fekadu",
    Dep: "Electrical and Computer Engineering",
    image: "/asset/profile1.jpg",
  },
  {
    name: "Kidist Belete",
    Dep: "Electrical and Computer Engineering",
    image: "/asset/profile1.jpg",
  },
];

const Advisor = {
  name: "Mr. Bulcha Begna",
  Dep: "Lead Advisor",
  image: "/asset/profile1.jpg",
};

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Advisor</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out mx-auto w-full max-w-sm">
          <img
            src={Advisor.image}
            alt={Advisor.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {Advisor.name}
            </h3>
            <p className="text-sm text-gray-500">{Advisor.role}</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-600">
          A group of passionate individuals working towards excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
