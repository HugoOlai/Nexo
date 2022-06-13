import React from 'react';

class Botao extends React.Component<{ nome: string }>{
    render(){
        return (
        <button>
            {this.props.nome}
        </button>
        )
    }
}

export default Botao