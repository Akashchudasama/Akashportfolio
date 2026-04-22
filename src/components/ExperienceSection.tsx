import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Train, ShoppingCart, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Business Development Associate",
      company: "Elewayte",
      type: "Full-Time - On Site",
      duration: "March 2026 - Present",
      location: "India",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description:
        "Driving business growth by identifying opportunities, building client relationships, and contributing to strategic sales initiatives.",
      achievements: [
        "Generated and qualified leads through outreach and networking strategies",
        "Built and maintained strong client relationships to drive business growth",
        "Collaborated with marketing and tech teams to align product offerings with client needs"
      ],
      technologies: ["Business Development", "Lead Generation", "Client Relations", "Sales Strategy", "Communication"]
    },
    {
      title: "Inside Sales & Operations Intern",
      company: "Glow Logics Solutions",
      type: "Internship - On Site",
      duration: "Nov 2025 - Jan 2026",
      location: "India",
      icon: Building,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description:
        "Contributed to sales and operational workflows by supporting lead management, CRM updates, and cross-team coordination to improve efficiency and tracking.",
      achievements: [
        "Supported daily operations through lead follow-ups and CRM data management",
        "Assisted in generating sales and operational reports for better decision-making",
        "Coordinated with multiple teams to ensure smooth communication and workflow continuity",
        "Maintained accurate client records and improved response timelines",
        "Helped streamline internal processes to reduce delays and manual effort"
      ],
      technologies: ["CRM Tools", "Sales Operations", "Client Coordination", "Reporting", "Process Management"]
    },
    {
      title: "Full Stack Web Developer",
      company: "Aushvera Globalize LLP",
      type: "Internship - On Site",
      duration: "May 2025 - August 2025",
      location: "Gujarat, India",
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description:
        "Developed a comprehensive e-commerce platform for Aushvera's herbal product line, implementing modern web technologies to create a seamless shopping experience.",
      achievements: [
        "Built full-scale e-commerce platform using HTML, CSS, JavaScript, PHP, and SQL",
        "Implemented complete product catalogue with advanced search and filtering",
        "Developed secure shopping cart and checkout system",
        "Created responsive, user-friendly interface for optimal user experience",
        "Integrated secure payment processing and order management",
        "Optimized database queries for improved performance"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "E-commerce", "Payment Integration"]
    },
    {
      title: "ICT Systems Intern",
      company: "Indian Railways",
      type: "Internship - On Site",
      duration: "Railway Department - Maliya Hatina (MLHA)",
      location: "Maliya Hatina, Gujarat",
      icon: Train,
      color: "text-accent",
      bgColor: "bg-accent/10",
      description:
        "Gained valuable hands-on experience in digital railway systems and operations, contributing to system documentation and analysis in a critical infrastructure environment.",
      achievements: [
        "Assisted senior engineers in analyzing digital railway systems and operations",
        "Contributed to comprehensive system documentation and process improvement",
        "Performed data analysis to support efficient operational workflows",
        "Participated in issue resolution and troubleshooting activities",
        "Developed practical understanding of ICT applications in public infrastructure",
        "Learned about railway safety systems and digital monitoring technologies"
      ],
      technologies: ["System Analysis", "Data Analysis", "Documentation", "ICT Infrastructure", "Railway Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in full-stack development, business operations, and critical infrastructure systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-full ${experience.bgColor} ${experience.color}`}>
                        <experience.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                        <p className="text-lg font-semibold text-primary">{experience.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-accent text-accent">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Tech */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/50 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-4">
                        Key Achievements:
                      </h4>
                      <div className="space-y-3">
                        {experience.achievements.map((a, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div
                              className={`w-2 h-2 ${experience.color.replace(
                                "text-",
                                "bg-"
                              )} rounded-full mt-2`}
                            ></div>
                            <span className="text-muted-foreground">{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Status */}
        <div className="mt-12 text-center">
          <Card className="card-elevated border-primary/30 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Currently Pursuing Excellence
              </h3>
              <p className="text-muted-foreground mb-4">
                Actively seeking new opportunities to apply my skills in innovative projects and collaborative environments.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 text-lg">
                  Open to Opportunities
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
