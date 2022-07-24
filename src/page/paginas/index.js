import Item from './Item';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import style from '../style.module.scss';
import Button from '@mui/material/Button';
import React, { useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {atualizaListaPerguntas, voltarListaPerguntas} from '../atualizaListaPerguntas.js'; 


export default function Pagina(props:{name:string}) {
    const {NomePagina} = props.pagina;
    console.log("NomePagina: " + NomePagina)
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

    const [definetamanho, setDefinetamanho] = useState(false)

      function Redireciona(Nome =''){
        console.log(Nome)
        let listaEncontrada = atualizaListaPerguntas(Nome);
        setItem(listaEncontrada);
      }
    
    function voltar(pergunta=''){
    let listaEncontrada = voltarListaPerguntas(pergunta);
    setItem(listaEncontrada)
    }
    

    
    useEffect(() => {
        var largura = window.innerWidth;
      
        if(largura <= 750){
          //var largura = window.innerWidth;
            setDefinetamanho(true)
          }else{
            setDefinetamanho(false)
          }
        
        }, [])

    if(NomePagina === undefined){
        if(definetamanho === true){
            return(
                <Grid item xs={12}>
                    <Card className={style.Perguntas}>
                    <CardContent className={style.Perguntas}>
                        {item.map((item, index) =>(
                        index !== 0?
                        <Typography variant="body2">
                            <h3 onClick={()=>Redireciona(item.Nome)}> <Item key={index} Nome ={item.Nome} /></h3>
                        </Typography>:
                        <Typography variant="h4" component="div">
                            <Item key={index} Nome ={item.Nome} /> 
                            <br />
                        </Typography>
                        ))}
                        <CardActions>
                        <Button startIcon={<ArrowBackIcon />} color="inherit" onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
                        </CardActions>
                    </CardContent>
                    
                </Card>
                </Grid>
            )
        } else {
            return (                
                <Grid item xs={6}>
                <Card className={style.Perguntas}>
                    <CardContent className={style.Perguntas}>
                        {item.map((item, index) =>(
                        index !== 0?
                        <Typography variant="body2">
                            <h3 onClick={()=>Redireciona(item.Nome)}> <Item key={index} Nome ={item.Nome} /></h3>
                        </Typography>:
                        <Typography variant="h4" component="div">
                            <Item key={index} Nome ={item.Nome} /> 
                            <br />
                        </Typography>
                        ))}
                        <CardActions>
                        <Button startIcon={<ArrowBackIcon />} color="inherit" onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
                        </CardActions>
                    </CardContent>
                    
                </Card>
                </Grid>                
            )          
        }
    } else {
        return (
            <h1>{NomePagina}</h1>
        )
    }
    
  }