import { createTheme } from "@mui/material";

export const mytheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});
