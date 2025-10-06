import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function About() {
  const skills = {
    cybersecurity: ['Penetration Testing', 'Vunerabiity Assessment', 'Incident Response'],
    development: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Php', 'Laravel', 'Docker' ],
    design: ['Figma'],
    data: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Statistical Analysis']
  };

  const skillCategories = [
    { key: 'cybersecurity', label: 'Cybersecurity', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
    { key: 'development', label: 'Development', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { key: 'design', label: 'Design', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { key: 'data', label: 'Data Science', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' }
  ];

  const timeline = [
    {
      year: '2023-2024',
      role: 'Vulnerability Assessment',
      company: 'PT Visionet Data Internasional',
      description: 'identifying, quantifying, and prioritizing the vulnerabilities in a system. Its goal is to provide a comprehensive view of the security risks a system faces, helping organizations understand what weaknesses they have and how to fix them.'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/rizko-d' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rizkofebri/' },
    { icon: Mail, label: 'Email', href: 'mailto:rizkofebry@gmail.com' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate technologist with diverse expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">I'm a versatile technology professional with a unique blend of skills spanning cybersecurity, full-stack development, UI/UX design, and data science. My journey began with a fascination for how technology can solve real-world problems while maintaining security and user-centric design.</p>
              <p className="text-lg leading-relaxed">My interdisciplinary approach allows me to create holistic solutions that are not only technically sound and secure but also intuitive and data-driven. I believe in the power of combining multiple domains to deliver exceptional results.</p>
            </div>

            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Surabaya, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>1+ years experience</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="sm"
                  className="group"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.key} className="space-y-3">
                  <h4 className="font-medium text-lg">{category.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills[category.key as keyof typeof skills].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={category.color}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl text-center">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center relative z-10">
                      <Award className="w-6 h-6" />
                    </div>
                    <Card className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-medium">{item.role}</h4>
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                      </div>
                      <p className="text-primary mb-2">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}