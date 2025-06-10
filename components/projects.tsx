"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: " Calculadora Avançada de IMC e Avaliação Físico-Nutricional",
    description:
      "Este projeto é uma calculadora avançada de IMC integrada a uma avaliação física e nutricional completa. Ideal para nutricionistas, personal trainers, clínicas e apps de saúde.",
    image: "/imc.png?height=400&width=600",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://fitcalc-pro.netlify.app/",
    repoUrl: "https://github.com/FranciscoMarquesdev/IMC.git",
  },
  {
    title: "Template de Landing Page de vendas de Automóveis",
    description:
      "Este projeto foi desenvolvido como um modelo moderno e responsivo para facilitar a criação de páginas de vendas de veículos.",
    image: "/Nissan.jpg.png?height=400&width=600",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://franciscomarquesdev.github.io/projetonissan/",
    repoUrl: "https://github.com/FranciscoMarquesdev/projetonissan.git",
  },
  {
    title: "Template de Landing Page de Estética Automotiva",
    description:
      "Bem-vindo ao Template de Landing Page de Estética Automotiva, desenvolvida para destacar os serviços de cuidados automotivos com sofisticação, desempenho e presença digital.",
    image: "/projetoaut.png?height=400&width=600",
    tags: ["HTML", "CSS"],
    demoUrl: "https://projeto-auto.netlify.app/",
    repoUrl: "https://github.com/FranciscoMarquesdev/ProjetoAuto.git",
  },
  {
    title: " Sistema de Agendamento para Barbearias",
    description:
      "Bem-vindo ao Sistema de Agendamento para Barbearias, uma solução prática e moderna para organizar os horários dos seus clientes com facilidade, eficiência e presença digital.",
    image: "/barbearia.png?height=400&width=600",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    demoUrl: "https://barbearia-gg.netlify.app/cliente/index.html",
    repoUrl: "https://github.com/FranciscoMarquesdev/barbearia.git",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi utilizando diversas
            tecnologias
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver mais no GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
