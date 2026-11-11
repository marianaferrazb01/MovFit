import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanDetails from "./components/PlanDetails";
import PlanForm from "./components/PlanForm";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Favorites from "./pages/Favorites";
import MyPlans from "./pages/MyPlans";
import { initialPlans } from "./data/plans";


export default function App() {
  const [plans, setPlans] = useState(initialPlans);
  const [activePage, setActivePage] = useState("inicio");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [favorites, setFavorites] = useState([]);

  function navigate(page) {
    setActivePage(page);
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  }

  function addPlan(newPlan) {
    setPlans((current) => [newPlan, ...current]);
    setActivePage("meus-planos");
  }

  function deletePlan(id) {
    if (initialPlans.some((plan) => plan.id === id)) return;
    if (!window.confirm("Tens a certeza que queres apagar este plano?")) return;

    setPlans((current) => current.filter((plan) => plan.id !== id));
    setFavorites((current) => current.filter((favoriteId) => favoriteId !== id));
    setSelectedPlan((current) => current?.id === id ? null : current);
  }

  const sharedPageProps = {
    favorites,
    onSelectPlan: setSelectedPlan,
    onToggleFavorite: toggleFavorite,
    onCreatePlan: () => navigate("criar"),
    onDeletePlan: deletePlan
  };

  return (
    <div className="app-shell">
      <Header activePage={activePage} onNavigate={navigate} />
      <main>
        {activePage === "inicio" && (
          <Home plans={plans} favorites={favorites} onNavigate={navigate}
            onSelectPlan={setSelectedPlan} onToggleFavorite={toggleFavorite} />
        )}

        {activePage === "planos" && (
          <Plans {...sharedPageProps} plans={plans} />
        )}

        {activePage === "favoritos" && (
          <Favorites {...sharedPageProps}
            plans={plans.filter((plan) => favorites.includes(plan.id))} />
        )}

        {activePage === "meus-planos" && (
          <MyPlans {...sharedPageProps}
            plans={plans.filter((plan) => !initialPlans.some((original) => original.id === plan.id))} />
        )}

        {activePage === "criar" && (
          <section className="create-section">
            <div className="page-intro">
              <span className="eyebrow">O TEU TREINO, AS TUAS REGRAS</span>
              <h1>Constrói a tua rotina.</h1>
              <p>Cria um plano à tua medida e adiciona os exercícios que queres acompanhar.</p>
            </div>
            <PlanForm onAddPlan={addPlan} />
          </section>
        )}
      </main>
      <Footer onNavigate={navigate} />
      <PlanDetails plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </div>
  );
}
