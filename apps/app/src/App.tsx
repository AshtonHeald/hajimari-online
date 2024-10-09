import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import useStore from "./stores/SettingsStore";
import IconButton from "@mui/material/IconButton";
import Settings from "./components/Settings";
import Search from "./components/Search";
import { Icon } from "@iconify/react";
import "./app.css";

function App() {
  const { color } = useStore();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: color,
      },
    },
  });

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Search />
        <Settings open={open} toggleDrawer={toggleDrawer} />
        <Box sx={{ position: "fixed", bottom: "0", left: "0" }}>
          <IconButton
            onClick={() => {
              toggleDrawer(true);
            }}
            sx={{ m: "12px" }}
            className="glass"
          >
            <Icon icon="tabler:settings" />
          </IconButton>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
