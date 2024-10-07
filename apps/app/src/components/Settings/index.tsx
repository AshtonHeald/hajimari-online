import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Icon } from "@iconify/react";
import BasicSettings from "./BasicSettings";
import ResetSettings from "./ResetSettings";
import Footer from "../Footer";

interface SettingsProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        toggleDrawer(false);
      }}
      elevation={0}
    >
      <Toolbar style={{ padding: "0 16px", minHeight: "60px" }}>
        Settings
        <IconButton
          onClick={() => {
            toggleDrawer(false);
          }}
          sx={{ ml: "auto" }}
        >
          <Icon icon="mdi:close" />
        </IconButton>
      </Toolbar>
      <Divider />
      <Box sx={{ width: 250 }} role="presentation">
        <BasicSettings />
      </Box>
      <Box sx={{ width: 250, marginTop: "auto" }} role="presentation">
        <ResetSettings />
        <Divider />
        <Footer />
      </Box>
    </Drawer>
  );
};

export default Settings;
