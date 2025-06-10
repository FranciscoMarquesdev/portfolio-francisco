"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react"

const skills = [
  {
    name: "HTML & CSS",
    icon: <Layout className="h-8 w-8 text-primary" />,
    description: "Criação de interfaces modernas e responsivas com HTML semântico e CSS avançado",
  },
  {
    name: "JavaScript",
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "Desenvolvimento de aplicações interativas e dinâmicas com JavaScript moderno",
  },
  {
    name: "Node.js",
    icon: <Server className="h-8 w-8 text-primary" />,
    description: "Construção de APIs robustas e aplicações backend escaláveis",
  },
  {
    name: "Integração de APIs",
    icon: <Database className="h-8 w-8 text-primary" />,
    description: "Conexão e integração com diversas APIs e serviços de terceiros",
  },
  {
    name: "UI/UX",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    description: "Design de interfaces intuitivas e experiências de usuário agradáveis",
  },
  {
    name: "Automação",
    icon: <Zap className="h-8 w-8 text-primary" />,
    description: "Automação de processos e tarefas para aumentar a produtividade",
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que utilizo para desenvolver soluções digitais
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card hover:bg-accent transition-colors duration-300 rounded-lg p-6 shadow-md border border-border"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
