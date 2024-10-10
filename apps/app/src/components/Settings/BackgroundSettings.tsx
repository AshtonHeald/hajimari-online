import ListItem from "@mui/material/ListItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useSettingsStore from "../../stores/SettingsStore";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import { Icon } from "@iconify/react";

const BackgroundSettings = () => {
  const { videoSettings, toggleAutoPlay, video, videos, setVideo } =
    useSettingsStore();

  const handleChangeVideo = (event: SelectChangeEvent) => {
    const selectedVideo = videos.find(
      (vid) => vid.title === event.target.value,
    );
    if (selectedVideo) {
      setVideo(selectedVideo);
    }
  };

  return (
    <>
      <ListItem>
        <FormControl fullWidth>
          <InputLabel id="background-label">Background</InputLabel>
          <Select
            labelId="background-label"
            label="Background"
            title="Background Select"
            value={video.title}
            onChange={handleChangeVideo}
          >
            {videos.map((vid) => (
              <MenuItem key={vid.url} value={vid.title}>
                {vid.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
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
            <Icon icon="tabler:player-play" />
          </ListItemIcon>
          <ListItemText primary="Play Video" />
          <Switch
            sx={{ mr: "0px" }}
            edge="end"
            onChange={toggleAutoPlay}
            checked={videoSettings.autoPlay}
            inputProps={{ "aria-labelledby": "autoplay-switch" }}
          />
        </Paper>
      </ListItem>
    </>
  );
};

export default BackgroundSettings;
