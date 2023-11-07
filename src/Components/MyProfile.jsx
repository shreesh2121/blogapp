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
import MyBlogs from "./MyBlogs";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function MyProfile() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.posts);

  useEffect(() => {
    dispatch(fetchMyBlog());
  }, [dispatch]);

  // Add showFullDescription state
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle showFullDescription
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleBlogCreate = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Blogs
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My blogs
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {blogs.map((blog,i) => (
              <Grid item key={blog} xs={12} sm={6} md={4}>
                <MyBlogs key={i} blog={blog} />
              </Grid>
              // <MyBlogs key={i} blog={blog} />

            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

// import * as React from "react";
// import MyBlogs from "./MyBlogs";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMyBlog } from "../Redux/BlogSlice";

// export default function AllBlogs() {
//   const dispatch = useDispatch();
//   const blogs = useSelector((state) => state.blog.posts);

//   useEffect(() => {
//     dispatch(fetchMyBlog());
//   }, [dispatch]);
//   console.log(blogs);

//   return (
//     <div>
//       {blogs.map((blog, i) => (
//         // <BlogCard key={i} blog={blog} />
//         < MyBlogs key={i} blog={blog} />
//       ))}
//     </div>
//   );
// }
