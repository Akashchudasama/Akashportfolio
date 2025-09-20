import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Server, Globe, Brain, GitBranch, 
  FileCode, Laptop, Zap, Layers
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "UI/UX Design"]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Node.js", "Express.js", "PHP", "API Development", "Server Architecture"]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-tech-green",
      bgColor: "bg-tech-green/10",
      skills: ["MySQL", "MongoDB", "Database Design", "Query Optimization", "Data Modeling"]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      skills: ["Java", "Python", "JavaScript", "PHP", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["RAG (Retrieval-Augmented Generation)", "LLM Integration", "Vector Databases", "AI Applications", "Streamlit"]
    },
    {
      title: "Developer Tools",
      icon: GitBranch,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Git", "GitHub", "VS Code", "Tableau", "Development Workflow"]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development using React & Node.js",
      provider: "Udemy",
      date: "Apr 2025",
      icon: Layers
    },
    {
      title: "Introduction to Cyber Security",
      provider: "Cisco Networking Academy", 
      date: "May 2025",
      icon: Zap
    },
    {
      title: "C for Everyone: Programming Fundamentals",
      provider: "Coursera",
      date: "January 2023",
      icon: FileCode
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies and emerging AI solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-full ${category.bgColor} ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Professional Certifications
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{cert.title}</h4>
                <p className="text-accent font-semibold mb-1">{cert.provider}</p>
                <p className="text-muted-foreground text-sm">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;