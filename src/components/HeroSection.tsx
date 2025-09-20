import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroTechBg from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Tech Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTechBg})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading with gradient text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
              Akash Chudasama
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary font-semibold">ICT Engineering Student</span> & 
              <span className="text-accent font-semibold"> Full Stack Developer</span>
            </div>
          </div>

          {/* Professional summary */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about creating impactful digital solutions through innovation, 
            technical expertise, and user-focused design. Specializing in{' '}
            <span className="text-primary font-semibold">Full Stack Development</span>, {' '}
            <span className="text-accent font-semibold">AI Applications</span>, and {' '}
            <span className="text-tech-green font-semibold">Modern Web Technologies</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg tech-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/akashchudasama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-elevated"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/akash-chudasama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-elevated"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:akashchudasama27@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-elevated"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;