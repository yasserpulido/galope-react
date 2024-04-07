import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Tree as D3Tree } from "react-d3-tree";

const horseChart = {
  name: "Sting Music",
  children: [
    {
      name: "Northern Dancer (Sire)",
      attributes: {
        dateOfBirth: "2018-05-15",
      },
      children: [
        {
          name: "Sire's Father",
          // Atributos y niños adicionales pueden ir aquí...
        },
        {
          name: "Sire's Mother",
          // Atributos y niños adicionales pueden ir aquí...
        },
      ],
    },
    {
      name: "Misty Music (Dam)",
      attributes: {
        dateOfBirth: "2019-03-03",
      },
      children: [
        {
          name: "Dam's Father",
          // Atributos y niños adicionales pueden ir aquí...
        },
        {
          name: "Dam's Mother",
          // Atributos y niños adicionales pueden ir aquí...
        },
      ],
    },
  ],
};

const Tree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setTranslate({ x: width / 4, y: height / 2 });
    }
  }, []);

  return (
    <Box
      ref={containerRef}
      style={{ width: "100%", height: "100vh" }}
      sx={{ border: "2px solid grey" }}
    >
      <D3Tree
        data={horseChart}
        orientation="horizontal"
        translate={translate}
        zoomable={false}
        collapsible={false}
      />
    </Box>
  );
};

export default Tree;
