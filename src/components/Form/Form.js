import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import FileBase from "react-file-base64";

import useStyles from "./style";

import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));

    if (currentId === 0) {
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          InputLabelProps={{
            style: { color: "#E0DDAA" },
          }}
          InputProps={{ style: { color: "#E0DDAA" } }}
          style={{ color: "white" }}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          InputLabelProps={{
            style: { color: "#E0DDAA" },
          }}
          InputProps={{ style: { color: "#E0DDAA" } }}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          InputLabelProps={{
            style: { color: "#E0DDAA" },
          }}
          InputProps={{ style: { color: "#E0DDAA" } }}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          InputLabelProps={{
            style: { color: "#E0DDAA" },
          }}
          InputProps={{ style: { color: "#E0DDAA" } }}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          // color="primary"
          style={{ backgroundColor: "#E0DDAA", color: "black" }}
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          // color="secondary"
          style={{ backgroundColor: "#9C0F48", color: "#fff" }}
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
