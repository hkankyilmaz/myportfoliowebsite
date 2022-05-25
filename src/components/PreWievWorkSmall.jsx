import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PreWievWorkSmall.css";
import { useEffect } from "react";

const PreWievWorkSmall = (props) => {
  let atributeSmallWork = `small-work small-work${props.time}`;

  return (
    <div style={{ marginBottom: "30px" }} className={atributeSmallWork}>
      <Card className="small-work-item">
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Go Repo</Button>
          <Button size="small">Go Pages</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PreWievWorkSmall;
