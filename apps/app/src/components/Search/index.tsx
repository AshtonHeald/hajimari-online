import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "@iconify/react";
import FormControl from "@mui/material/FormControl";
import ButtonGroup from "@mui/material/ButtonGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useSettingsStore from "../../stores/SettingsStore";

const Search = () => {
  const { searchEngines, searchEngine, setSearchEngine } = useSettingsStore();

  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchUrl = `${searchEngine.url}${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
  };

  return (
    <FormControl
      component="form"
      id="searchBar"
      role="group"
      onSubmit={handleSearch}
      sx={{ display: "grid", placeItems: "center", paddingBottom: "100px" }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="glass"
      >
        {/* Select Search Engine */}
        <Select
          sx={{
            minWidth: 150,
            borderEndEndRadius: 0,
            borderStartEndRadius: 0,
          }}
          title="Search Engine"
          value={searchEngine.name}
          onChange={(e) => {
            const selected = searchEngines.find(
              (engine) => engine.name === e.target.value,
            );
            if (selected) setSearchEngine(selected);
          }}
        >
          {searchEngines.map((engine) => (
            <MenuItem key={engine.name} value={engine.name}>
              {engine.name}
            </MenuItem>
          ))}
        </Select>

        {/* Input for Query */}
        <TextField
          sx={{
            "& fieldset": {
              borderRadius: "0",
            },
            width: "300px",
          }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Search the web"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="tabler:search" width={24} />
              </InputAdornment>
            ),
          }}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        {/* Search Button */}
        <Button variant="contained" type="submit">
          Search
        </Button>
      </ButtonGroup>
    </FormControl>
  );
};

export default Search;
