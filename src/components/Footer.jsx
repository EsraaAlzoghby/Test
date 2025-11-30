import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";import amitLogo from "../assets/amit logo (white).png";

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:pr-6">
            <img
              src={amitLogo}
              alt="AMIT Logo"
              className="w-[160px] md:w-[170px] mb-5"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              AMIT, Association Of Management and Information Technology,
              is a rapidly growing company which was established in Egypt from 2011
              specialized in embedded systems, software computer science and IT.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("tracks")}
                  className="hover:text-red-500"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("instructors")}
                  className="hover:text-red-500"
                >
                  Instructors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="hover:text-red-500"
                >
                  Benefits
                </button>
              </li>
              <li>
                <a href="/questions" className="hover:text-red-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/questions" className="hover:text-red-500">
                  Take Free Exam
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-red-500">No-Code & Low-Code</a></li>
              <li><a href="#" className="hover:text-red-500">AI for Automation</a></li>
              <li><a href="#" className="hover:text-red-500">Frontend Development</a></li>
              <li><a href="#" className="hover:text-red-500">Data Analyst </a></li>
            </ul>
          </div>

       <div>
  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
  <ul className="space-y-4 text-sm text-gray-300">
    <li className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-red-500 mt-1" />
      <a href="mailto:support@amitpro.com" className="hover:text-red-500">
        support@amit.com
      </a>
    </li>
    <li className="flex items-start gap-3">
      <Phone className="w-5 h-5 text-red-500 mt-1" />
      <span className="hover:text-red-500">+20 123 456 7890</span>
    </li>
    <li className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
      <span className="hover:text-red-500">
        El Salam Tower, Next to As Salam International Hospital, Second Floor Above Alfa Laboratory, Cornish El Maadi, Cairo, Egypt.
      </span>
    </li>
    <li className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
      <span className="hover:text-red-500">
Al Serag Mall, Entrance 4, Next to Tec Hub Store, Left corridor, Fifth Floor, Nasr City, Cairo, Egypt.      </span>
    </li>
    <li className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
      <span className="hover:text-red-500">
234 Shaarawy St., Ghaly Building, Next to Hoda Shaarawy School, First Floor Above Masjid Al Farouk, Louran, Alexandria, Egypt.      </span>
    </li>
  </ul>
</div>

        </div>

        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Copyright */}
          <div className="text-gray-400">
            © 2025 AMIT Pro. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500  transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500  transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-red-500  transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
