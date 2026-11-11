export default function ExerciseCard({ exercise, index }) {
  return (
    <div className="exercise-row">
      <span className="exercise-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="exercise-name">
        <strong>{exercise.name}</strong>
        <small>{exercise.muscle}</small>
      </div>
      <span className="exercise-dose">{exercise.sets} × {exercise.reps}</span>
    </div>
  );
}
