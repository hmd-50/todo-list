import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function Todo({ TodoPrm, handleCheck }) {
  function shandleCheckClick() {
    handleCheck(TodoPrm.id);
  }
  return (
    <div>
      <Card
        className="todoCard"
        sx={{
          minWidth: 250,
          backgroundColor: "blue",
          color: "#e8f4fd",
          marginTop: "30px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid sx={{ textAlign: "right" }} size={7}>
              <Typography variant="h5" style={{ fontWeight: 800 }}>
                {" "}
                {TodoPrm.title}{" "}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {" "}
                {TodoPrm.details}{" "}
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                onClick={() => {
                  shandleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                style={{
                  color: TodoPrm.isCompleted ? "white" : "#8bc34a",
                  background: TodoPrm.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                  margin: "0 5px",
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                  margin: "0 5px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                  margin: "0 5px",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
