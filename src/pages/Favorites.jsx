import Plans from "./Plans";

export default function Favorites(props) {
  return (
    <Plans
      {...props}
      title="Os teus favoritos."
      intro="Os planos que guardaste para consultar mais tarde."
    />
  );
}
