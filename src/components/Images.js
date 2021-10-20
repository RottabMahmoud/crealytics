import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Images({ itemData }) {
  const imagesArray = [];
  itemData.split(",").forEach((x) => imagesArray.push({ img: x }));
  return (
    <ImageList sx={{ width: "100%", height: "100%", background: "lightgrey"}} cols={3} rowHeight={164}>
      {imagesArray.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
