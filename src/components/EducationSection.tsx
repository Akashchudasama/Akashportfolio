import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B. Tech in Information and Communication Technology",
      institution: "Marwadi University",
      location: "Rajkot, Gujarat",
      duration: "2022 - 2026",
      grade: "CGPA: 5.0",
      status: "Currently Pursuing",
      achievements: [
        "NAAC A+ & NBA Tier 1 Accredited University",
        "Consistent academic excellence with 5.0 CGPA",
        "Specialization in Full Stack Development and AI",
        "Active participation in technical projects and competitions"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bansidhar Vidyalaya",
      location: "Junagadh, Gujarat", 
      duration: "2020 - 2022",
      grade: "Percentage: 64.17%",
      status: "Completed",
      achievements: [
        "Strong foundation in Science and Mathematics",
        "Developed early interest in technology and programming",
        "Participated in various academic competitions"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Dream International School",
      location: "Junagadh, Gujarat",
      duration: "2018",
      grade: "Percentage: 74.33%",
      status: "Completed",
      achievements: [
        "Excellent academic performance",
        "First exposure to computer science concepts",
        "Leadership roles in school activities"
      ],
      color: "text-tech-green",
      bgColor: "bg-tech-green/10"
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development using React & Node.js",
      provider: "Udemy",
      date: "Apr 2025",
      type: "Professional Certificate",
      skills: ["React.js", "Node.js", "Full Stack Development", "Modern Web Technologies"]
    },
    {
      title: "Introduction to Cyber Security",
      provider: "Cisco Networking Academy",
      date: "May 2025", 
      type: "Industry Certificate",
      skills: ["Network Security", "Cyber Threats", "Security Protocols", "Risk Assessment"]
    },
    {
      title: "C for Everyone: Programming Fundamentals",
      provider: "Coursera",
      date: "January 2023",
      type: "Programming Certificate",
      skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Academic Journey</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Education Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-full ${edu.bgColor} ${edu.color}`}>
                          <GraduationCap className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge 
                            className={`mb-2 ${edu.status === 'Currently Pursuing' ? 'bg-gradient-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                        <p className="text-xl font-semibold text-primary">{edu.institution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-4">Key Highlights:</h4>
                        <div className="space-y-3">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 ${edu.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-muted-foreground">{achievement}</span>
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
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Professional Certifications</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{cert.title}</h4>
                      <p className="text-accent font-semibold">{cert.provider}</p>
                      <p className="text-muted-foreground text-sm">{cert.date}</p>
                    </div>

                    <Badge variant="outline" className="border-primary text-primary">
                      {cert.type}
                    </Badge>

                    <div>
                      <h5 className="font-semibold text-foreground text-sm mb-2">Skills Gained:</h5>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Excellence Banner */}
        <div className="mt-12 text-center">
          <Card className="card-elevated border-primary/30 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Commitment to Excellence
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Continuously expanding knowledge through formal education and professional development
              </p>
              <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 text-lg">
                Lifelong Learner
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;