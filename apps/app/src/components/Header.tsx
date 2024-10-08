// components/Header.tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStore from "../stores/SettingsStore";

const Header = () => {
  const { name, color, showGreeting } = useStore();
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
      return "Good Evening";
    } else {
      return "Greetings";
    }
  };

  const greeting = getGreeting();

  if (!showGreeting) return null;

  return (
    <Box
      className="glass"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        position: "absolute",
        top: "100px",
        marginX: "auto",
      }}
    >
      <Typography
        variant={"h1"}
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 0,
          fontWeight: "bold",
          position: "fixed",
          fontSize: "3rem",
          width: "100%",
          "@media (max-width:810px)": {
            fontSize: "2rem",
          },
        }}
      >
        {greeting}
        <Box sx={{ color: color }}>&nbsp;{name}</Box>
      </Typography>
    </Box>
  );
};

export default Header;
