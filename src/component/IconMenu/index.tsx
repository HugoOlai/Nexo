import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%'}}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SearchIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
          </ListItemIcon>
          <ListItemText>Verificação de elegibilidade</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DescriptionIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
          </ListItemIcon>
          <ListItemText>Detalhes do pedido</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AirplanemodeActiveIcon sx={{color: 'rebeccapurple'}} fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dados do voo</ListItemText>
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
  );
}
