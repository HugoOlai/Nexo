//import Pagina from './paginas';
import Bar from '../component/bar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from './style.module.scss';
import Radio from '@mui/material/Radio';
import Detalhes from './paginas/detalhes';
import AddIcon from '@mui/icons-material/Add';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import FaceIcon from '@mui/icons-material/Face';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState, useEffect} from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import CssBaseline from '@mui/material/CssBaseline';
import CardActions from '@mui/material/CardActions';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {atualizaListaPerguntas, voltarListaPerguntas} from './atualizaListaPerguntas.js'; 

import Item from './paginas/Item';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function App() {
  
  const [pagina, setPagina] = useState<string>('Verificacao');
  const [SubPagina, setSubPagina] = useState<string>('Perguntas');
  const [quantidadePessoas, setQuantidadePessoas] = useState<number>(0);
  //const [voltarPerguntas, setVoltarPerguntas] = useState<string>()

  function RedirecionaPagina(pagina: string){
    console.log(pagina)
    setPagina(pagina)

  }
  
  function Pagina(props:{nome:string}) {
    const NomePagina = props.nome;
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

    const [detalheItems, setDetalheItems] = useState([{
        Nome: 'Você recebeu algun voucher alimentação da empresa?',
      },
      {
        Nome: 'Sim',
      }, 
      {
        Nome: 'Não',
      }, 
    ])

  const [definetamanho, setDefinetamanho] = useState(false)

  function Redireciona(Nome =''){
    console.log(Nome)
    let listaEncontrada = atualizaListaPerguntas(Nome);
    setItem(listaEncontrada);
  }

  function soma(valor: number){
    var resultado = valor + 1
    setQuantidadePessoas(resultado)
  }
  
  function subtracao(valor: number){
    if(valor > 0){
      var resultado = valor - 1
      setQuantidadePessoas(resultado)
    }
  }

  function RedirecionaDetalhes(Nome: any){
    console.log('pergunta: '+ Nome)
    if(Nome == 'Você possui algum tipo de necessidade especial?'){
      setSubPagina('Quantidade de pessoas')
    }else{
      let listaEncontrada = atualizaListaPerguntas(Nome);
      setDetalheItems(listaEncontrada);
    }
  }

  function voltar(pergunta=''){
  console.log('pergunta: '+ pergunta);
  if(pergunta == 'Quantidade de pessoas'){
    setSubPagina('Perguntas')
  }
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

  if(NomePagina === 'Verificacao'){
      if(definetamanho === true){
          return(
              <Grid item xs={12}>
                <div className={style.Perguntas}>
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
                  </CardContent>                  
                </div>
                <div style={{marginTop: '10px'}}>
                  <Button color="secondary" style={{borderRadius: '20px'}} variant="contained" startIcon={<ArrowBackIcon />} onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
                </div>
              </Grid>
          )
      } else {
          return (                
              <Grid item xs={6}>
              <div className={style.Perguntas}>
                  <CardContent className={style.Perguntas}>
                      {item.map((item, index) =>(
                      index !== 0?
                      <Typography variant="body2">
                          <h3 onClick={()=>Redireciona(item.Nome)}> 
                          <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                              <FormControlLabel control={<Radio color="default" sx={{'color': 'white'}}/>} label={item.Nome} />
                            {/* <Item key={index} Nome ={item.Nome} /> */}
                          </RadioGroup>
                          </FormControl>
                          </h3>
                      </Typography>:
                      <Typography variant="h4" component="div">
                          <Item key={index} Nome ={item.Nome} />
                          <br />
                      </Typography>
                      ))}
                  </CardContent>                  
              </div>
              <div style={{marginTop: '10px'}}>
                <Button color="secondary" style={{borderRadius: '20px'}} variant="contained" startIcon={<ArrowBackIcon />} onClick={()=>voltar(item[0].Nome)}>Voltar</Button>
              </div>
              </Grid>                
          )          
      }
  } 
  if(NomePagina === 'Detalhes') {
      if(SubPagina === 'Perguntas'){
        return (
          <Grid item xs={6}>
            <div className={style.Perguntas}>
                <CardContent className={style.Perguntas}>
                <Typography variant="body2">                
                  {detalheItems.map((item, index) =>(
                      index !== 0?
                      <h3 onClick={()=>RedirecionaDetalhes(detalheItems[0].Nome)}>
                        <Detalhes Nome={item.Nome}/>
                      </h3>
                        :
                      <Typography variant="h4" component="div">
                        <Item key={index} Nome ={item.Nome} />
                      </Typography>
                  ))}
                
                  </Typography>
                <CardActions>
                </CardActions>
                </CardContent>
            </div>
            <div style={{marginTop: '10px'}}>
              <Button color="secondary" style={{borderRadius: '20px'}} variant="contained" startIcon={<ArrowBackIcon />} onClick={()=>voltar('Você recebeu algun voucher alimentação da empresa?')}>Voltar</Button>
            </div>
          </Grid>
        )
      } else {
        return (
          <Grid item xs={6}>
            <div className={style.Perguntas}>
              <CardContent className={style.Perguntas}>
                <Typography variant="body2">                
                  <Typography variant="h4" component="div">
                    <div>
                      Você estava acompanhado(a) de quantas pessoas?
                    </div>
                    <small style={{fontSize: '17px', color: 'grey'}}>ou seja, quantas pessoas estavam viajando junto com você?</small>
                    
                    <Grid container spacing={1}  
                        sx={{        
                          paddingTop:'20px',             
                          borderRadius: '30px',                          
                          justifyContent: 'center',                          
                        }}
                      >
                        <div style={{
                          backgroundColor: 'pink',
                          borderRadius: '30px',   
                          float: 'left'                       
                        }}>
                        <Grid item xs={2} md={5} sx={{float: 'left'}}>
                          <Button onClick={() => subtracao(quantidadePessoas)} color="error" variant="contained" size="small"
                          sx={{
                            borderRadius: '30px',
                            margin: '10px'
                          }} >
                            <RemoveIcon/>
                          </Button>
                        </Grid>
                        <Grid item xs={1} md={5} sx={{float: 'left', marginLeft: '2px', textAlign: 'center'}}>
                          <Box style={{color: 'black'}}> {quantidadePessoas}</Box>
                        </Grid>
                        <Grid item xs={1} md={5} sx={{float: 'left'}}>
                          <Button onClick={() => soma(quantidadePessoas)} color="success" variant="contained" size="small"
                          sx={{
                            float: 'left',
                            margin: '10px',
                            borderRadius: '30px'
                          }}>
                            <AddIcon/>
                          </Button>
                        </Grid>
                        </div>
                      </Grid>
                  </Typography>
                </Typography>
              </CardContent>
                
            </div>
            <div style={{marginTop: '10px'}}>
              <Button color="secondary" style={{borderRadius: '20px'}} variant="contained" startIcon={<ArrowBackIcon />} onClick={()=>voltar('Quantidade de pessoas')}>Voltar</Button>
            </div>
          </Grid>
        )
      }
  }else{
    return(
      <h1>teste</h1>
    )
  }  
}

return (
    <React.Fragment>
    <CssBaseline />
      <Bar />
      <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <div>
          <Paper sx={{ width: 320, maxWidth: '100%'}}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <SearchIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={()=>RedirecionaPagina('Verificacao')}>Verificação de elegibilidade</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DescriptionIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={()=>RedirecionaPagina('Detalhes')}>Detalhes do pedido</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AirplanemodeActiveIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={()=>RedirecionaPagina('dadosVoo')}>Dados do voo</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PhotoCameraBackIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText>Provas</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <FaceIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText>Dados Pessoais</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText>Endereço</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ArticleIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
                </ListItemIcon>
                <ListItemText>Documentos Pessoais</ListItemText>
              </MenuItem>        
            </MenuList>
          </Paper>
          </div>
        </Grid>
        <Pagina nome={pagina}/>
      </Grid>
      </Container>
  </React.Fragment>

  );
}

export default App;
