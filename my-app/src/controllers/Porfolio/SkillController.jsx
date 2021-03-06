import React, {useState, useContext} from 'react';
import { StoreContext } from '../../context/store.context';
import { makeStyles } from '@material-ui/core/styles';
import CardAccent from "../../common/CardAccent";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import AxiosInstance from "../../utils/axios";
import axios from 'axios'
import SkeletonCard from "../../common/SkeletonCard";

const useStyles = makeStyles( theme => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: `5px solid ${theme.palette.primary.main}`
  },
  title:{
    fontWeight: 700
  },
  container:{
    "& > *": {
      marginRight: theme.spacing(1)
    }
  },
  chip: {
    backgroundColor: "#1976D2",
    "& > span": {
      fontWeight:700,
      color:"#FAFAFA",
      minWidth: "80px",
      textAlign: "center"
    },
  },
  outlined: {
    border: "1px solid #1976D2",
    "& > span": {
      fontWeight:700,
      minWidth: "80px",
      textAlign: "center",
      color: "#1976D2"
    },
  },
  subTitle:{
    fontWeight: 700,
    marginTop: theme.spacing(2)
  },
  text:{
    fontWeight: 700,
    fontSize: "0.875rem",
    fontStyle: "italic",
    color: theme.palette.text.secondary
  }
}));


const accentColor = "#FDD835";

function SkillController(props) {
  const classes = useStyles();

  const { user } = props;
  const [loading, setLoading] = useState(true);
  const [technicalSkills, setTechnical] = useState([])
  const [softSkills, setSoft] = useState([])

  const {state} = useContext(StoreContext);
  const config = {
    headers: { Authorization: `Bearer ${state.user.token}` }
  };

  React.useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
   

    AxiosInstance
      .get(`/public/skills/${user}`, config)
      .then(response => {
        const { data } = response;
        const technical = data.filter(item => item.category === "Technical")
        const soft = data.filter(item => item.category == "Soft") 
        setTechnical(technical)
        setSoft(soft)

      })
    
    setLoading(false);
    return () => {
      source.cancel(
        "Canceled because of component unmounted"
      );
    };
  },[user])

  return (
    <div id="skill">
    <CardAccent  className={classes.root} color={accentColor}>
      <Typography className={classes.title} variant="h4" gutterBottom> Skills</Typography>
      <Typography className={classes.subTitle} variant="h6" gutterBottom> Technical Skills</Typography>
        <>
          {
            loading? <SkeletonCard /> :
              <>
                {
                  technicalSkills.length?
                  (<div className={classes.container}>
                    {
                      technicalSkills.map((value,key)=> {
                        return(
                          <Chip className={classes.chip} key={key} label={value.name} />
                        )
                      })
                    }
                  </div>):
                  <div>
                    <Typography className={classes.text}>
                      The user has not entered any tech skill.
                    </Typography>
                  </div>
                }
                <Typography className={classes.subTitle} variant="h6" gutterBottom> Soft Skills</Typography>
                
                {
                  softSkills.length?
                  (  <div className={classes.container}>
                      {
                        softSkills.map( (value,key)=> {
                          return(
                            <Chip color="primary" variant="outlined" className={classes.outlined} key={key} label={value.name} />
                          )
                        })
                      }
                    </div>):
                    <div>
                      <Typography className={classes.text}>
                      The user has not entered any soft skill.
                    </Typography>
                    </div>
                }
            </>
          }
        </>
     
    </CardAccent>
    </div>
  )
}

export default SkillController
