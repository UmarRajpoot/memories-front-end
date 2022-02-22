import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1A1A40",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#E0DDAA",
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: "#203239",
    color: "#E0DDAA",
    boxShadow: "0px 0px 20px 10px rgba(0,0,0,0.5)",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
