import { Clock3, Heart, ArrowUpRight, Trash2 } from "lucide-react";
import fullBodyIniciante from "../assets/fullbodyiniciante.jpg";
import pernas from "../assets/pernasegluteo.jpg";
import peito from "../assets/peito.jpeg";
import costas from "../assets/costas.jpeg";
import mobilidade from "../assets/mobilidade.png";
import fullBodyAvancado from "../assets/fullbodyavançada.png";

const planImages = {
  1: fullBodyIniciante,
  2: pernas,
  3: peito,
  4: costas,
  5: mobilidade,
  6: fullBodyAvancado,
};

export default function PlanCard({ plan, isFavorite, onSelect, onToggleFavorite, onDelete }) {
  return (
    <article className="plan-card">
      <div
  className={`plan-art art-${plan.id % 5}`}
  style={{
    backgroundImage: planImages[plan.id]
      ? `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.10)
        ), url("${planImages[plan.id]}")`
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <span className="art-label">{plan.category}</span>
        <span className="art-number">0{plan.id}</span>
        <button
          className={`favorite-button ${isFavorite ? "favorited" : ""}`}
          onClick={() => onToggleFavorite(plan.id)}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <div className="art-decoration">{plan.id % 2 === 0 ? "STRENGTH" : "MOVE"}</div>
      </div>
      <div className="plan-card-content">
        <div className="plan-meta">
          <span className="level-dot">{plan.level}</span>
          <span><Clock3 size={14} /> {plan.duration}</span>
        </div>
        <h3>{plan.title}</h3>
        <p>{plan.description}</p>
        <div className="card-bottom">
          <span>{plan.exercises.length} exercícios · {plan.days} {plan.days === 1 ? "dia" : "dias"}/semana</span>
          <div className="card-actions">
            {onDelete && (
              <button className="delete-plan-button" onClick={() => onDelete(plan.id)} aria-label={`Apagar ${plan.title}`}>
                <Trash2 size={14} /> Apagar
              </button>
            )}
            <button className="text-button" onClick={() => onSelect(plan)}>
              Ver plano <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
