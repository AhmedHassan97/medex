import SearchIcon from "@/svgs/search";
import { Button } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 50,
    },

    searchInput: {
      outlineColor: "#f9ba32",
      width: 382,
      padding: 9,
    },
  })
);

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Search by product name category and type..."
      />
      <Button
        style={{
          backgroundColor: "#22b0f0",
          borderRadius: 0,
        }}
        onMouseEnter={() => console.log("hassona")}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
