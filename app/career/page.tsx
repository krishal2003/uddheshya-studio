import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Target,
  Award,
} from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Lead digital marketing campaigns and drive growth for our clients across multiple channels.",
    },
    {
      title: "Creative Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Create stunning visual designs and brand identities that captivate audiences.",
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Build responsive and interactive web experiences using modern technologies.",
    },
    {
      title: "Content Strategist",
      department: "Content",
      location: "On-site",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Develop compelling content strategies that engage and convert target audiences.",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development programs",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" mt-8 text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover exciting opportunities to grow your career and make an
              impact
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-border hover-lift"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground"
                    >
                      {job.department}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:uddheshya@gmail.com">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground btn-premium">
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where our team can thrive
              and do their best work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground animate-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented
            individuals. Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:uddheshya@gmail.com">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 btn-premium"
              >
                Send Your Resume
              </Button>
            </a>
            <a href="mailto:hruddheshya@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-premium"
              >
                Contact HR Team
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
