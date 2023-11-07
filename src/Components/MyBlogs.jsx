import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchMyBlog } from "../Redux/BlogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

export default function MyBlogs({ blog }) {
  //   const dispatch = useDispatch();
  //   const blogs = useSelector((state) => state.blog.posts);

  //   useEffect(() => {
  //     dispatch(fetchMyBlog());
  //   }, [dispatch]);

  // Add showFullDescription state
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle showFullDescription
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

 
  return (
    <Card key={blog.id}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
        }}
        image="https://source.unsplash.com/random?wallpapers"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {blog.Title}
        </Typography>
        <Typography>
          {showFullDescription
            ? blog.Description
            : `${blog.Description.substring(0, 100)}...`}
        </Typography>
        <Button size="small" onClick={toggleDescription}>
          {showFullDescription ? "Read less" : "Read more"}
        </Button>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
