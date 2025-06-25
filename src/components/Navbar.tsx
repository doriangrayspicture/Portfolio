export default function Navbar() {
  const links = ['about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 py-3 px-6 flex justify-center gap-6 shadow-md">
      {links.map(link => (
        <a
          key={link}
          href={`#${link}`}
          className="text-white hover:text-pink-400 transition font-medium capitalize"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
