import { useState } from "react";
import { Dumbbell, Plus, Search } from "lucide-react";
import PlanCard from "../components/PlanCard";
import { categories } from "../data/plans";

export default function Plans({ plans, favorites, title = "Escolhe o teu plano.",
  intro = "Explora as rotinas e encontra aquela que melhor se adapta a ti.",
  onSelectPlan, onToggleFavorite, onCreatePlan, onDeletePlan }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const visiblePlans = plans.filter((plan) => {
    const matchesCategory = activeCategory === "Todos" || plan.category === activeCategory;
    const matchesSearch = plan.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-section">
      <div className="page-intro">
        <span className="eyebrow">ENCONTRA A TUA ROTINA</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="catalog-tools">
        <div className="search-box">
          <Search size={18} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar plano..." />
        </div>
        <div className="filter-list">
          {categories.map((category) => (
            <button key={category}
              className={activeCategory === category ? "filter-chip selected" : "filter-chip"}
              onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
      {visiblePlans.length > 0 ? (
        <div className="plan-grid">
          {visiblePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isFavorite={favorites.includes(plan.id)}
              onSelect={onSelectPlan} onToggleFavorite={onToggleFavorite}
              onDelete={title === "Os meus treinos." ? onDeletePlan : undefined} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Dumbbell size={30} />
          <h3>Ainda não existem planos.</h3>
          <p>Experimenta alterar os filtros ou cria o teu próprio plano.</p>
          <button className="primary-button" onClick={onCreatePlan}>Criar plano <Plus size={16} /></button>
        </div>
      )}
    </section>
  );
}
