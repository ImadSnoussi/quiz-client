import React from "react";
import { TextField, Button, Box } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{
        '&  .MuiTextField-root':{
            
        }
    }}>
      <form noValidate autoComplete="off">
        <TextField label="Email" name="email" variant="outlined" />
        <TextField label="Name" name="name" variant="outlined" />
        <Button type="submit" variant="contained" size="large">
          Start
        </Button>
      </form>
    </Box>
  );
}
