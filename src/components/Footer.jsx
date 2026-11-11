import { Dumbbell } from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <button className="brand footer-brand" onClick={() => onNavigate("inicio")}>
        <span className="brand-icon"><Dumbbell size={18} /></span>
        <span>Mov<span className="brand-accent">Fit</span></span>
      </button>
      <span>PLANEIA. TREINA. EVOLUI.</span>
      <span>© 2026 MovFit</span>
    </footer>
  );
}
