import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Code, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Akash Chudasama</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              ICT Engineering student and passionate Full Stack Developer creating 
              innovative digital solutions through modern technologies and AI applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground">
              Always excited to discuss new opportunities and innovative projects.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/akashchudasama" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/akash-chudasama" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:akashchudasama27@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;