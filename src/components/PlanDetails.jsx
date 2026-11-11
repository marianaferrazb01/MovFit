import { X, Clock3, CalendarDays, Dumbbell } from "lucide-react";
import ExerciseCard from "./ExerciseCard";

export default function PlanDetails({ plan, onClose }) {
  if (!plan) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="details-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        <span className="eyebrow">PLANO DE TREINO</span>
        <h2>{plan.title}</h2>
        <p className="modal-description">{plan.description}</p>
        <div className="details-stats">
          <span><Clock3 size={16} /> {plan.duration}</span>
          <span><CalendarDays size={16} /> {plan.days} dias por semana</span>
          <span><Dumbbell size={16} /> {plan.level}</span>
        </div>
        <h3 className="exercise-heading">Exercícios incluídos</h3>
        <div className="exercise-list">
          {plan.exercises.map((exercise, index) => (
            <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} index={index} />
          ))}
        </div>
        <p className="safety-note">
          Nota: adapta a carga e a execução à tua condição física. Em caso de dúvida,
          pede orientação a um profissional qualificado.
        </p>
      </section>
    </div>
  );
}
