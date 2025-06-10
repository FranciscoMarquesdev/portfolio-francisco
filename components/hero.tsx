"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Foto à direita - mas primeira no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Foto principal */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/foto.png?height=450&width=450"
                  alt="Francisco Marques - Desenvolvedor Web"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-primary/15 rounded-full"></div>

              {/* Badge flutuante */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Disponível para projetos
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto à esquerda - mas segundo no mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Olá, eu sou <br />
                <span className="text-primary">Francisco Marques</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Desenvolvedor Web especializado em criar experiências digitais
                modernas e funcionais com HTML, CSS, JavaScript e Node.js
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="#projects">Ver Projetos</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base"
                >
                  <Link href="#contact">Entre em Contato</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Botão de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown />
              <span className="sr-only">Rolar para baixo</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
