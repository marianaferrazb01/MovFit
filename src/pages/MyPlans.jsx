import Plans from "./Plans";

export default function MyPlans(props) {
  return (
    <Plans
      {...props}
      title="Os meus treinos."
      intro="Aqui encontras os planos que criaste para ti."
    />
  );
}
