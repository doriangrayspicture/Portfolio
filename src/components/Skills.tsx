const skills = ['Java', 'Python', 'React', 'TensorFlow', 'SQL', 'Tailwind', 'Git', 'OpenCV'];

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-pink-600 rounded-full text-white text-sm shadow hover:bg-pink-700">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
