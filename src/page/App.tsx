import Home from './Home';
import Bar from '../component/bar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import style from './style.module.scss';
import Paper from '@mui/material/Paper';
import Menu from '../component/IconMenu';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import React, { useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {atualizaListaPerguntas, voltarListaPerguntas} from './atualizaListaPerguntas.js'; 

function App() {
  const [item, setItem] = useState([{
    Nome: 'Por qual dessas situações você passou?',
  },
  {
    Nome: 'Problema com voo',
  }, 
  {
    Nome: 'Problema com bagagem',
  }, 
  {
    Nome: 'Problema com reembolso de passagem',
  }])
  const [definetamanho, setDefinetamanho] = useState<boolean>(false)
  const [voltarPerguntas, setVoltarPerguntas] = useState<string>()

  function Redireciona(Nome: string){
    console.log(Nome)
    let listaEncontrada = atualizaListaPerguntas(Nome);
    setItem(listaEncontrada);
  }

  function voltar(pergunta: string){
    let listaEncontrada = voltarListaPerguntas(pergunta);
    setItem(listaEncontrada)
  }

useEffect(() => {
  var largura = window.innerWidth;

  if(largura <= 750){
    var largura = window.innerWidth;
      setDefinetamanho(true)
    }else{
      setDefinetamanho(false)
    }
  
  }, [])

return (
    <React.Fragment>
    <CssBaseline />
      <Bar />
      <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <div className={style.Menu}>
            <Menu />
          </div>
        </Grid>
        {definetamanho === true? 
        <Grid item xs={12}>
        <Card className={style.Perguntas}>
            <CardContent className={style.Perguntas}>
              {item.map((item, index) =>(
                index !== 0?
                <Typography variant="body2">
                  <h3 onClick={()=>Redireciona(item.Nome)}> <Home key={index} Nome ={item.Nome} /></h3>
                </Typography>:
                <Typography variant="h4" component="div">
                  <Home key={index} Nome ={item.Nome} /> 
                  <br />
                </Typography>
              ))}
              <CardActions>
                <Button startIcon={<ArrowBackIcon />} color="inherit" onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
              </CardActions>
            </CardContent>
            
        </Card>
        </Grid>
        :
        <Grid item xs={6}>
        <Card className={style.Perguntas}>
            <CardContent className={style.Perguntas}>
              {item.map((item, index) =>(
                index !== 0?
                <Typography variant="body2">
                  <h3 onClick={()=>Redireciona(item.Nome)}> <Home key={index} Nome ={item.Nome} /></h3>
                </Typography>:
                <Typography variant="h4" component="div">
                  <Home key={index} Nome ={item.Nome} /> 
                  <br />
                </Typography>
              ))}
              <CardActions>
                <Button startIcon={<ArrowBackIcon />} color="inherit" onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
              </CardActions>
            </CardContent>
            
        </Card>
        </Grid>
        }
      </Grid>
      </Container>
  </React.Fragment>

  );
}

export default App;
