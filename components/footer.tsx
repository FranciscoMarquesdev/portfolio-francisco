import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-primary">F</span>rancisco
              <span className="text-primary">|dev</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desenvolvedor web especializado em criar experiências digitais
              modernas e funcionais.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/FranciscoMarquesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 transition-colors p-2 rounded-full"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/francisco-marques-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 transition-colors p-2 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/francisco.dev__/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 transition-colors p-2 rounded-full"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="francisco:francisco.devfullstack1@gmail.com"
              className="bg-background hover:bg-primary/10 transition-colors p-2 rounded-full"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Francisco Marques. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
