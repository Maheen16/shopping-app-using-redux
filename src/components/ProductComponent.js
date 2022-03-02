import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products.length, "array length");
  const renderList = products.map((pro, index) => {
    return (
      <Grid item xs={12} key={pro.id} sm={6} md={3}>
        <Link to={`product/${pro.id}`} style={{ textDecoration: "none" }}>
          <Card>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "300px",
              }}
            >
              <CardMedia
                component="img"
                alt={pro.title}
                sx={{
                  width: "60%",
                  objectFit: "contain",
                  height: "100%",
                  mt: 1,
                }}
                image={pro.image}
              />
            </div>
            <CardContent>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", height: "85px" }}
              >
                {pro.title}
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                $ {pro.price}
              </Typography>
              <Typography type="body">{pro.category}</Typography>
            </CardContent>
          </Card>
        </Link>
        {/* )} */}
      </Grid>
    );
  });
  return (
    <>
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {products.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "65vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          renderList
        )}
      </Grid>
    </>
  );
};

export default ProductComponent;
