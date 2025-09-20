import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "ICT Engineering @ Marwadi University", color: "text-primary" },
    { icon: Code, text: "Full Stack Web Developer", color: "text-accent" },
    { icon: Brain, text: "Python Developer & Enthusiast", color: "text-tech-green" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and creativity to build innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I'm a passionate <span className="text-primary font-semibold">ICT Engineering student</span> at 
                  Marwadi University with a strong focus on <span className="text-accent font-semibold">Full Stack Web Development</span>. 
                  My journey combines academic excellence with hands-on experience in building innovative digital solutions.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6">
                   My expertise spans across modern web technologies, Python development, and system architecture. 
                   I believe in creating solutions that not only solve problems but also enhance user experiences 
                   through thoughtful design and robust engineering.
                 </p>

                 <div className="space-y-3">
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-primary rounded-full"></div>
                     <span className="text-foreground">Currently pursuing B.Tech ICT (2022-2026)</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-accent rounded-full"></div>
                     <span className="text-foreground">CGPA: 5.0 - Academic Excellence</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-tech-green rounded-full"></div>
                     <span className="text-foreground">Specialized in Python Development</span>
                   </div>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-secondary ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{item.text}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Achievement Badge */}
            <Card className="card-elevated border-primary/30 bg-gradient-primary/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-bold text-xl text-primary mb-2">Academic Excellence</h3>
                  <p className="text-muted-foreground mb-4">NAAC A+ & NBA Tier 1 University</p>
                  <Badge variant="outline" className="border-primary text-primary">
                    Top Performer
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;