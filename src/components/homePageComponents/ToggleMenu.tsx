import ToggleButton from "@mui/material/ToggleButton/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup/ToggleButtonGroup";

interface Props {
  selectedMenuOption: string;
  handleMenuOption: (selectedOption: string) => void;
}

const ToggleMenu = ({ selectedMenuOption, handleMenuOption }: Props) => {
  return (
    <div className="toggle-button-group-container">
      <ToggleButtonGroup
        value={selectedMenuOption}
        exclusive
        onChange={(_, value) => handleMenuOption(value)}
        aria-label="opção"
      >
        <ToggleButton value="Deputados">Deputados</ToggleButton>
        <ToggleButton value="Partidos">Partidos</ToggleButton>
        <ToggleButton value="Proposições">Proposições</ToggleButton>
        <ToggleButton value="Eventos">Eventos</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleMenu;
