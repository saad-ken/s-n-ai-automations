const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "🔗" },
    { name: "Facebook", href: "#", icon: "📘" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">S&N AI Automations</h3>
            <p className="text-gray-300">
              Recharge in silence with AI automation.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                aria-label={link.name}
                className="text-gray-300 hover:text-white text-2xl transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {currentYear} S&N AI Automations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
