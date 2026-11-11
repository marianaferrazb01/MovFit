import { Dumbbell, Heart, House, Layers3, PlusCircle, ClipboardList } from "lucide-react";

const links = [
  { id: "inicio", label: "Início", icon: House },
  { id: "planos", label: "Planos", icon: Layers3 },
  { id: "criar", label: "Criar plano", icon: PlusCircle },
  { id: "meus-planos", label: "Os meus treinos", icon: ClipboardList },
  { id: "favoritos", label: "Favoritos", icon: Heart }
];

export default function Header({ activePage, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => onNavigate("inicio")} aria-label="Ir para o início">
        <span className="brand-icon"><Dumbbell size={21} /></span>
        <span>Mov<span className="brand-accent">Fit</span></span>
      </button>
      <nav className="nav-links" aria-label="Navegação principal">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <button key={link.id}
              className={`nav-link ${activePage === link.id ? "active" : ""}`}
              onClick={() => onNavigate(link.id)}>
              <Icon size={16} />
              {link.label}
            </button>
          );
        })}
      </nav>
      <div className="topbar-tag">TREINA AO TEU RITMO</div>
    </header>
  );
}
