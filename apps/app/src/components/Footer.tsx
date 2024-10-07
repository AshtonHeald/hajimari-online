import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
      }}
    >
      <Box sx={{ display: "flex", columnGap: "8px" }}>
        <Link href="">Website</Link>|<Link href="">Source Code</Link>
      </Box>
      <span>Version 1.0.0-beta.1</span>
    </ListItem>
  );
};

export default Footer;
