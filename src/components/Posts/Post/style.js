import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px",
    height: "100%",
    position: "relative",
    backgroundColor: "#203239",
    color: "#E0DDAA",
    boxShadow: "5px 10px 20px 10px rgba(0,0,0,0.3)",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#E0DDAA",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#E0DDAA",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
