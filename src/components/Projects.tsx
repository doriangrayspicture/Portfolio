interface Project {
  title: string;
  description: string;
  tech: string;
}

const projects: Project[] = [
  { title: "Grievance Redressal System", description: "Web app for complaint submission and tracking.", tech: "MERN Stack" },
  { title: "Spam Detection using CNN", description: "ML model to detect spam messages.", tech: "Python, TensorFlow" },
  { title: "Number Plate Recognition", description: "OCR system using OpenCV and Python.", tech: "OpenCV, Tesseract" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-400">{proj.title}</h3>
            <p className="text-gray-300">{proj.description}</p>
            <span className="text-sm text-gray-400 block mt-2">{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
