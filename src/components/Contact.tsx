import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Clock,
  Terminal,
  MessageSquare,
  Download,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeokqowv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Transmitted!",
          description:
            "Your message has been sent successfully. I'll respond within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Oops! Something went wrong.",
          description: "Please try again later or check your connection.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Network error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download Started!",
      description: "Your resume download will begin shortly.",
    });

    // Fixed: Removed "href:" prefix from the URL
    const link = Object.assign(document.createElement("a"), {
      href: "https://drive.google.com/uc?export=download&id=1bvJSHc3hA1gLhSWoAvgg-1YbLJRnxpMT",
      download: "Rahul_Singh_Rawat_Resume.pdf",
    });

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rawatr0788@gmail.com",
      action: () => window.open("mailto:rawatr0788@gmail.com"),
      description: "Direct communication",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      action: null,
      description: "Current base",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 hours",
      action: null,
      description: "Average reply time",
    },
  ];

  // Fixed: Swapped GitHub and LinkedIn URLs
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/rahul-r8488",
      color: "hover:text-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-singh-rawat-1082b3258/",
      color: "hover:text-gray-700",
    },
    { icon: Terminal, label: "Dev.to", url: "#", color: "hover:text-gray-700" },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects - Reduced opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid Lines - Reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <MessageSquare className="w-8 h-8 text-cyan-400" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">CON</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              TACT
            </span>
          </h2>

          <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
            {">"} Let's collaborate and build something extraordinary together
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* Contact Form and Download Resume */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-cyan-400" />
                  Send Message
                </CardTitle>
                <p className="text-gray-400 font-mono text-sm">
                  {">"} Initialize communication protocol
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/10 rounded-lg h-12 font-mono transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/10 rounded-lg h-12 font-mono transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Describe your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 resize-none font-mono transition-all duration-300"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-black font-mono font-bold h-12 text-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    TRANSMIT_MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Download Resume Box */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold flex items-center gap-3">
                  <Download className="w-6 h-6 text-purple-500" />
                  Download Resume
                </CardTitle>
                <p className="text-gray-400 font-mono text-sm">
                  {">"} Get a copy of my complete professional profile
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Download my comprehensive resume including detailed work
                    experience, technical skills, projects, and achievements in
                    PDF format.
                  </p>

                  <div className="flex items-center gap-2 text-purple-500 font-mono text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Last updated: JULY 2025</span>
                  </div>

                  <Button
                    onClick={handleDownloadResume}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-mono font-bold h-12 text-lg transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    DOWNLOAD_RESUME.PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Info */}
            <div className="bg-gray-900/30 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ready to transform ideas into reality? I'm passionate about
                collaborating on innovative projects that push the boundaries of
                technology.
              </p>

              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 ${
                    info.action ? "cursor-pointer hover:bg-gray-800/50" : ""
                  } group`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold">{info.value}</p>
                      <p className="text-gray-500 text-xs font-mono">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/30 border border-gray-700/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4">
                Find Me Online
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-gray-600/50 text-gray-400 hover:border-gray-700 hover:text-white hover:bg-gray-800/20 w-12 h-12 rounded-xl transition-all duration-300 group"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
