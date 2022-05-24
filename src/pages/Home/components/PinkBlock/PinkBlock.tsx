import { Grid } from "../../../../components";
import { Typography } from "../../../../components/Typography";
import styles from "./PinkBlock.module.scss";

interface IPinkBlock {
  title: string;
}

export const PinkBlock: React.FC<IPinkBlock> = ({ title }) => {
  return (
    <Grid className={styles.wrapper}>
      <Typography as="h1" className={styles.white}>{title}</Typography>
    </Grid>
  );
};
