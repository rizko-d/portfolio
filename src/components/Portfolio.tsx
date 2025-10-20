import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Shield, Code, Palette, BarChart3, Filter, FileText, Figma } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'cybersecurity' | 'development' | 'design' | 'data';
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  notionUrl?: string;
  figmaUrl?: string;
  featured: boolean;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Backend API Development with Payment Gateway Integration',
      description: 'Build Backend APIs for e-commerce businesses using PHP and Laravel. Integrate payment gateways like DOKU, and Authorize for secure transactions.',
      category: 'development',
      image: 'https://i.pinimg.com/736x/fe/d7/9a/fed79a9c659b8c286507b89c9ab1cc60.jpg',
      technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Railway'],
      githubUrl: 'https://github.com/rizko-d/ecommerce-api',
      liveUrl: 'https://web-production-e35b7.up.railway.app/',
      featured: true
    },
    {
      id: '2',
      title: 'Frontend Development for Learning Management System',
      description: 'Create responsive and user-friendly frontend interfaces for a Learning Management System (LMS) using React and Tailwind CSS.',
      category: 'development',
      image: 'https://i.pinimg.com/736x/d8/12/e3/d812e35c175fa8a38e995efc5bc0d101.jpg',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://github.com/rizko-d/lms-online',
      liveUrl: 'https://lms-online-moofut5dq-rizkos-projects.vercel.app/',
      featured: true
    },
    {
      id: '3',
      title: 'Wireframe Design for Company Profile Website',
      description: 'Clean wireframe for a company profile page with all the essential sections and features.',
      category: 'design',
      image: 'https://i.pinimg.com/736x/fa/15/87/fa1587f5d4d52d0777ae79ff36c92dfe.jpg',
      technologies: ['Figma'],
      notionUrl: 'https://www.notion.so/rizko/Design-Portfolio-292b7a26286e804f8162cc753e579d79?source=copy_link',
      figmaUrl: 'https://www.figma.com/design/u4eU6mhZS0NELeoLKUIt03/Wireframe-Company-Profile?node-id=0-1&t=y2AlDvTNeyPbbw0N-1',
      featured: true
    },
    {
      id: '4',
      title: 'Wireframe Design for eCommerce Website',
      description: 'Mid-fidelity wireframe for an artisanal coffee bean online store with all the requested pages and components.',
      category: 'design',
      image: 'https://i.pinimg.com/736x/be/e6/66/bee66686815fca6e69200c5eaf8cdd85.jpg',
      technologies: ['Figma'],
      notionUrl: 'https://www.notion.so/rizko/eCommerce-Wireframe-292b7a26286e8024846af2267e7e8c99?source=copy_link',
      figmaUrl: 'https://www.figma.com/design/SSNNjFtvS9nThJ2aVkIDOr/Wireframe-eCommerce?node-id=0-1&t=sF3DYbap8zxUBwHw-1',
      featured: true
    }

  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
    { id: 'development', label: 'Development', icon: Code },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'data', label: 'Data', icon: BarChart3 }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      cybersecurity: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      development: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      data: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise across different domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="group"
            >
              <category.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured Project
                    </Badge>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(project.category)}>
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.category === 'design' ? (
                    <>
                      {project.notionUrl && (
                        <Button size="sm" className="flex-1 group/btn" asChild>
                          <a href={project.notionUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View in Notion
                          </a>
                        </Button>
                      )}
                      {project.figmaUrl && (
                        <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
                          <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                            <Figma className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View in Figma
                          </a>
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <Button size="sm" className="flex-1 group/btn" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View Project
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}