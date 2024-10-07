import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import useSettingsStore from "../../stores/SettingsStore";

const ResetSettings = () => {
  const { resetSettings } = useSettingsStore();

  const handleReset = () => {
    resetSettings();
  };

  return (
    <List>
      <ListItem>
        <Button
          variant="outlined"
          startIcon={<Icon icon="tabler:alert-circle" />}
          color="error"
          sx={{ height: "40px", width: "100%" }}
          onClick={handleReset}
        >
          Reset Settings
        </Button>
      </ListItem>
    </List>
  );
};

export default ResetSettings;
