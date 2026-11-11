import { ArrowRight, Dumbbell, Sparkles, Target } from "lucide-react";
import PlanCard from "../components/PlanCard";

export default function Home({ plans, favorites, onNavigate, onSelectPlan, onToggleFavorite }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={14} /> O TEU ESPAÇO DE TREINO</span>
          <h1>Treina com<br /><span>um plano.</span><br />Evolui ao teu ritmo.</h1>
          <p>Encontra rotinas de treino, descobre novos exercícios e organiza os teus objetivos num só lugar.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate("planos")}>Explorar planos <ArrowRight size={17} /></button>
            <button className="secondary-button" onClick={() => onNavigate("criar")}>Criar o meu plano</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-big-number">01<span>/{String(plans.length).padStart(2, "0")}</span></div>
          <div className="hero-vertical">CONSISTÊNCIA É A CHAVE</div>
          <div className="hero-sticker"><Dumbbell size={28} /><span>MOVE<br />BETTER</span></div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>{plans.length.toString().padStart(2, "0")}</strong><span>Planos disponíveis</span></div>
        <div><strong>{plans.reduce((sum, plan) => sum + plan.exercises.length, 0)}</strong><span>Exercícios nos planos</span></div>
        <div><strong>{favorites.length.toString().padStart(2, "0")}</strong><span>Os teus favoritos</span></div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><span className="eyebrow">COMEÇA POR AQUI</span><h2>Planos em destaque</h2></div>
          <button className="text-button" onClick={() => onNavigate("planos")}>Ver todos <ArrowRight size={16} /></button>
        </div>
        <div className="plan-grid">
          {plans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.id} plan={plan} isFavorite={favorites.includes(plan.id)}
              onSelect={onSelectPlan} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-icon"><Target size={25} /></div>
        <div>
          <span className="eyebrow">PEQUENOS PASSOS, GRANDES RESULTADOS</span>
          <h2>O melhor plano é aquele que consegues manter.</h2>
          <p>Escolhe uma rotina adequada ao teu nível e adapta-a aos teus objetivos.</p>
        </div>
        <button className="round-arrow" onClick={() => onNavigate("planos")} aria-label="Explorar planos"><ArrowRight /></button>
      </section>
    </>
  );
}
