import React, {FC} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
// import PoList from '.';
import PageEmpty from "../common/PageEmpty"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
    },
  }),
);

function PoListItem(props: ListChildComponentProps) {
  const { index, style } = props;
  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}


export interface PoListProps {
    data?: any,
    pageNo?: Number,
    rowNo?: Number,
    total?: Number
}
export const PoListComponent: FC<PoListProps> = (props) => {
  const classes = useStyles();
  const {total} = props.data
  return (
    <div className={classes.root}>
      {
        !total && <PageEmpty />
      }
      {
        total && <FixedSizeList height={400} width='100%' itemSize={46} itemCount={total??0}>
          {PoListItem}
        </FixedSizeList>
      }


    </div>
  );
}
PoListComponent.defaultProps ={
    data: [],
    pageNo: 0,
    rowNo: 0,
    total: 0
}

export default PoListComponent