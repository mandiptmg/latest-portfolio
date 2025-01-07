import { experiences } from "../../../data/data";
const Experience = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-right">
          Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="mb-8 border-b border-gray-700 pb-4"
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg text-teal-400">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-300">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
