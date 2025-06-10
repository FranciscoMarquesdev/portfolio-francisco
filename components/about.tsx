"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Sobre</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco sobre minha trajetória e paixão pelo
            desenvolvimento web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/sobremin.jpg?height=600&width=600"
                alt="Francisco Marques"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Francisco Marques</h3>
            <p className="text-muted-foreground mb-6">
              Sou um desenvolvedor web apaixonado por criar soluções digitais
              que combinam funcionalidade e estética. Com experiência em HTML,
              CSS, JavaScript e Node.js, tenho me dedicado a desenvolver
              aplicações web modernas e responsivas que proporcionam excelentes
              experiências aos usuários.
            </p>
            <p className="text-muted-foreground mb-6">
              Minha jornada na programação começou com a curiosidade de entender
              como os sites funcionam, e desde então venho aprimorando minhas
              habilidades para criar interfaces intuitivas e sistemas robustos.
              Sou especialmente interessado em integração de APIs, automação de
              processos e boas práticas de UI/UX.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3+</span>
                  <span className="text-sm text-muted-foreground">
                    Anos de Experiência
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary">20+</span>
                  <span className="text-sm text-muted-foreground">
                    Projetos Concluídos
                  </span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
