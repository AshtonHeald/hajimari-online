import ListItem from "@mui/material/ListItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useSettingsStore from "../../stores/SettingsStore";
import MenuItem from "@mui/material/MenuItem";

const EngineSettings = () => {
  const { searchEngines, searchEngine, setDefaultEngine } = useSettingsStore();

  const handleChangeDefaultEngine = (event: SelectChangeEvent) => {
    const selectedEngine = searchEngines.find(
      (engine) => engine.name === event.target.value,
    );
    if (selectedEngine) {
      setDefaultEngine(selectedEngine);
    }
  };

  return (
    <ListItem>
      <FormControl fullWidth>
        <InputLabel id="default-engine-label">Default Search Engine</InputLabel>
        <Select
          labelId="default-engine-label"
          value={searchEngine.name}
          label="Default Search Engine"
          onChange={handleChangeDefaultEngine}
        >
          {searchEngines.map((engine) => (
            <MenuItem key={engine.name} value={engine.name}>
              {engine.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>
  );
};

export default EngineSettings;
