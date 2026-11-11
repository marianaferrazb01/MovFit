export const initialPlans = [
  {
    id: 1,
    title: "Full Body — Iniciante",
    category: "Corpo inteiro",
    level: "Iniciante",
    days: 3,
    duration: "45–55 min",
    description: "Uma rotina equilibrada para começar a treinar e trabalhar os principais grupos musculares.",
    exercises: [
      { name: "Agachamento", muscle: "Pernas", sets: "3", reps: "10–12" },
      { name: "Supino com halteres", muscle: "Peito", sets: "3", reps: "10–12" },
      { name: "Remada sentada", muscle: "Costas", sets: "3", reps: "12" },
      { name: "Elevação lateral", muscle: "Ombros", sets: "2", reps: "12–15" },
      { name: "Prancha", muscle: "Abdominais", sets: "3", reps: "30 segundos" }
    ]
  },
  {
    id: 2,
    title: "Glúteos & Pernas",
    category: "Pernas",
    level: "Intermédio",
    days: 2,
    duration: "50–60 min",
    description: "Treino focado na parte inferior do corpo, com exercícios para pernas e glúteos.",
    exercises: [
      { name: "Hip thrust", muscle: "Glúteos", sets: "4", reps: "10–12" },
      { name: "Leg press", muscle: "Pernas", sets: "3", reps: "10–12" },
      { name: "Peso morto romeno", muscle: "Posterior da coxa", sets: "3", reps: "10" },
      { name: "Abdução de anca", muscle: "Glúteos", sets: "3", reps: "15" }
    ]
  },
  {
    id: 3,
    title: "Peito & Tríceps",
    category: "Parte superior",
    level: "Intermédio",
    days: 1,
    duration: "45–55 min",
    description: "Uma sessão dedicada aos músculos de empurrar da parte superior do corpo.",
    exercises: [
      { name: "Supino", muscle: "Peito", sets: "3", reps: "8–10" },
      { name: "Supino inclinado com halteres", muscle: "Peito", sets: "3", reps: "10–12" },
      { name: "Tríceps na polia", muscle: "Tríceps", sets: "3", reps: "12" },
      { name: "Extensão de tríceps", muscle: "Tríceps", sets: "2", reps: "12" }
    ]
  },
  {
    id: 4,
    title: "Costas & Bíceps",
    category: "Parte superior",
    level: "Intermédio",
    days: 1,
    duration: "45–55 min",
    description: "Uma sessão para trabalhar costas e bíceps através de movimentos de puxar.",
    exercises: [
      { name: "Puxada frontal", muscle: "Costas", sets: "3", reps: "10–12" },
      { name: "Remada com halteres", muscle: "Costas", sets: "3", reps: "10" },
      { name: "Face pull", muscle: "Ombros", sets: "2", reps: "12–15" },
      { name: "Curl de bíceps", muscle: "Bíceps", sets: "3", reps: "10–12" }
    ]
  },
  {
    id: 5,
    title: "Mobilidade",
    category: "Abdominais",
    level: "Iniciante",
    days: 2,
    duration: "25–35 min",
    description: "Uma rotina curta para trabalhar a estabilidade do tronco e a mobilidade.",
    exercises: [
      { name: "Prancha", muscle: "Abdominais", sets: "3", reps: "20–30 segundos" },
      { name: "Dead bug", muscle: "Core", sets: "3", reps: "10 por lado" },
      { name: "Bird dog", muscle: "Core", sets: "2", reps: "10 por lado" },
      { name: "Mobilidade da anca", muscle: "Mobilidade", sets: "2", reps: "8 por lado" }
    ]
  },
  {
    id: 6,
    title: "Full Body — Avançado",
    category: "Corpo inteiro",
    level: "Avançado",
    days: 3,
    duration: "55–70 min",
    description: "Uma rotina de corpo inteiro para quem já tem experiência de treino.",
    exercises: [
      { name: "Agachamento com barra", muscle: "Pernas", sets: "4", reps: "6–8" },
      { name: "Peso morto", muscle: "Costas e pernas", sets: "3", reps: "6–8" },
      { name: "Supino com barra", muscle: "Peito", sets: "3", reps: "8" },
      { name: "Remada curvada", muscle: "Costas", sets: "3", reps: "8–10" },
      { name: "Prancha", muscle: "Core", sets: "3", reps: "45 segundos" }
    ]
  }
];

export const categories = ["Todos", "Corpo inteiro", "Pernas", "Parte superior", "Abdominais"];
