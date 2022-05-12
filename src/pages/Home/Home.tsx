import { Grid } from "../../components";
import { PinkBlock } from "./components";
import style from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <Grid className={style.grid}>
      <PinkBlock title="WIKI Rick and Morty" />
      <div>Желтый блок</div>
      <div>блок информацииd 2</div>
      <div>меню</div>
    </Grid>
  );
};
