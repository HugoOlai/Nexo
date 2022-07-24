import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import style from './style.module.scss';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function detalhes(props:{Nome:string}) {
    const {Nome} = props;

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel control={<Radio color="default" sx={{'color': 'white'}}/>} label={Nome} />
                {/* <Item key={index} Nome ={item.Nome} /> */}
            </RadioGroup>
        </FormControl>
    )
  }