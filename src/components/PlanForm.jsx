import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const emptyExercise = { name: "", muscle: "", sets: "3", reps: "10–12" };

export default function PlanForm({ onAddPlan }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Corpo inteiro");
  const [level, setLevel] = useState("Iniciante");
  const [days, setDays] = useState("3");
  const [duration, setDuration] = useState("45–55 min");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([{ ...emptyExercise }]);

  function updateExercise(index, field, value) {
    setExercises((current) =>
      current.map((exercise, i) => i === index ? { ...exercise, [field]: value } : exercise)
    );
  }

  function addExercise() {
    setExercises((current) => [...current, { ...emptyExercise }]);
  }

  function removeExercise(index) {
    setExercises((current) => current.length > 1 ? current.filter((_, i) => i !== index) : current);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validExercises = exercises.filter((exercise) => exercise.name.trim());
    if (!title.trim() || validExercises.length === 0) return;

    onAddPlan({
      id: Date.now(),
      title: title.trim(),
      category,
      level,
      days: Number(days),
      duration,
      description: description.trim() || "Plano de treino criado por ti.",
      exercises: validExercises
    });

    setTitle("");
    setCategory("Corpo inteiro");
    setLevel("Iniciante");
    setDays("3");
    setDuration("45–55 min");
    setDescription("");
    setExercises([{ ...emptyExercise }]);
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">PERSONALIZA A TUA ROTINA</span>
        <h2>Cria um novo plano</h2>
        <p>Preenche os dados e adiciona os exercícios que queres incluir.</p>
      </div>
      <div className="form-grid">
        <label className="field field-wide">
          Nome do plano
          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Ex.: Treino de pernas" required />
        </label>
        <label className="field">
          Grupo muscular
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>Corpo inteiro</option>
            <option>Pernas</option>
            <option>Parte superior</option>
            <option>Abdominais</option>
          </select>
        </label>
        <label className="field">
          Nível
          <select value={level} onChange={(event) => setLevel(event.target.value)}>
            <option>Iniciante</option>
            <option>Intermédio</option>
            <option>Avançado</option>
          </select>
        </label>
        <label className="field">
          Dias por semana
          <select value={days} onChange={(event) => setDays(event.target.value)}>
            <option value="1">1 dia</option>
            <option value="2">2 dias</option>
            <option value="3">3 dias</option>
            <option value="4">4 dias</option>
            <option value="5">5 dias</option>
            <option value="6">6 dias</option>
          </select>
        </label>
        <label className="field">
          Duração estimada
          <select value={duration} onChange={(event) => setDuration(event.target.value)}>
            <option>25–35 min</option>
            <option>35–45 min</option>
            <option>45–55 min</option>
            <option>55–70 min</option>
            <option>Mais de 70 min</option>
          </select>
        </label>
        <label className="field field-wide">
          Descrição
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Descreve brevemente o objetivo deste plano..." rows="3" />
        </label>
      </div>

      <div className="exercise-form-heading">
        <div><h3>Exercícios</h3><p>Adiciona pelo menos um exercício ao teu plano.</p></div>
        <button type="button" className="outline-button" onClick={addExercise}><Plus size={16} /> Adicionar exercício</button>
      </div>
      <div className="exercise-fields">
        {exercises.map((exercise, index) => (
          <div className="exercise-input-row" key={index}>
            <label className="field">
              Exercício
              <input value={exercise.name} onChange={(event) => updateExercise(index, "name", event.target.value)} placeholder="Ex.: Agachamento" />
            </label>
            <label className="field">
              Grupo muscular
              <input value={exercise.muscle} onChange={(event) => updateExercise(index, "muscle", event.target.value)} placeholder="Ex.: Pernas" />
            </label>
            <label className="field">
              Séries
              <input value={exercise.sets} onChange={(event) => updateExercise(index, "sets", event.target.value)} />
            </label>
            <label className="field">
              Repetições
              <input value={exercise.reps} onChange={(event) => updateExercise(index, "reps", event.target.value)} />
            </label>
            <button type="button" className="remove-exercise" onClick={() => removeExercise(index)} aria-label="Remover exercício"><Trash2 size={17} /></button>
          </div>
        ))}
      </div>
      <button className="primary-button submit-button" type="submit"><Plus size={17} /> Guardar plano de treino</button>
    </form>
  );
}
