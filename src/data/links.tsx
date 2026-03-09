import { ReactNode } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: ReactNode;
  description?: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  bio: string;
  local: string;
  avatar: string;
}

// ─── Dados do perfil ────────────────────────────────
export const profile: ProfileData = {
  name: "Matheus Costa",
  handle: "@matheusccp2",
  bio: "Frontend Developer.",
  local: "Sorocaba, São Paulo, BR",
  avatar: "https://avatars.githubusercontent.com/u/93059906?v=4",
};

// ─── Lista de links ─────────────────────────────────
export const links: LinkItem[] = [
  {
    id: "portfolio",
    label: "Meu Portfólio",
    url: "https://myportfolio-matheusccp2.vercel.app/",
    icon: "🎨",
    description: "Veja meus projetos mais recentes",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/matheusccp2",
    icon: <FaGithub size={20} />,    
    description: "Código fonte & repositórios",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/matheusccp2",
    icon: "in",
    description: "Experiência profissional",
  },
  {
    id: "contato",
    label: "Entre em contato comigo",
    url: "mailto:contato.matheusccp2@gmail.com",
    icon: <Mail size={20} />,
    description: "contato.matheusccp2@gmail.com",
  },
  {
    id: "discord",
    label: "Entre no meu Discord",
    url: "https://discord.gg/28t2E3JV9c",
    icon: <FaDiscord size={20} />
  },
];
