// src/components/SettingsComponent.tsx
import React from "react";
import useSettingsStore from "../../stores/SettingsStore";
import { MuiColorInput } from "mui-color-input";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
//import ListSubheader from "@mui/material/ListSubheader";
//import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import { Icon } from "@iconify/react";

const Settings = () => {
  const { name, color, showGreeting, setName, setColor, toggleGreeting } =
    useSettingsStore();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValidName = (input: string) =>
      input.trim().length > 0 && input.length <= 20;

    if (isValidName(value)) {
      setName(value);
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <>
      <ListItem>
        <Paper
          elevation={3}
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: "4px",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Icon width={20} icon="tabler:mood-smile-beam" />
          </ListItemIcon>
          <ListItemText id="" primary="Greeting" />
          <Switch
            sx={{ mr: "0px" }}
            edge="end"
            onChange={toggleGreeting}
            checked={showGreeting}
            inputProps={{
              "aria-labelledby": "",
            }}
          />
        </Paper>
      </ListItem>
      <ListItem>
        <TextField
          id="name"
          value={name}
          label="Name"
          variant="outlined"
          onChange={handleNameChange}
        />
      </ListItem>
      <ListItem>
        <MuiColorInput
          label="Color"
          title="Primary Color"
          value={color}
          onChange={handleColorChange}
        />
      </ListItem>
    </>
  );
};

export default Settings;

{
  /*<Divider />
      <List subheader={<ListSubheader>Language</ListSubheader>}>
        Language
      </List>
      <Divider />
      <List subheader={<ListSubheader>Background</ListSubheader>}>
        Background
      </List>
      <Divider />
      <List subheader={<ListSubheader>Search</ListSubheader>}>
        Search
      </List>
      */
}
