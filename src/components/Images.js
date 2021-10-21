import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Images({ itemData }) {
  /** The Array of Image to be rendered in display once item is expanded, filled with objects,
   * including the img src, as the value of key img
   */
  const imagesArray = [];
  /** To transform the array of Strings, the additional images value, to an array of objects,
   *containingg each img as key and the value as its string
   */
  itemData.split(",").forEach((x) => imagesArray.push({ img: x }));
  return (
    <ImageList
      sx={{ width: "100%", height: "25em" }}
      cols={imagesArray.length}
      gap={0}
      // rowHeight={180}
    >
      {imagesArray.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.img}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
