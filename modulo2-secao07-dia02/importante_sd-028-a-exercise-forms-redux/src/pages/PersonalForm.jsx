import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { submitPersonalInfo } from '../redux/actions';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.state;

    // dá para usar o history pq está sendo roteado, então tem propriedades do React Router DOM. Além disso, sem o connect (conectar o componente ao redux), o componente não tem dispatch
    const { history, dispatch } = this.props;

    return (
      <form
        onSubmit={ (e) => {
          // se ñ tiver e.preventDefault o formulario ai ter o comportamento padrão de recarregar a pág. e enviar as info. automaticamente p/ o parâmetro
          e.preventDefault();

          // o dispatch está aqui disparando a ação submitPersonalInfo pq qd o botão próximo é clicado, a função onSubmit é executada por ele ser do tipo submit. O this.state é passado como parâmetro da função dispatch pq todas as info. se encontram no estado do próprio componente c/ os estados atualizados)
          dispatch(submitPersonalInfo(this.state));

          // esse history vai levar para a rota professional-form qd apertar o botão pq o botão é do tipo submit e dispara essa função onSubmit qd clicado
          history.push('/professional-form');

          console.log('Ao clicar, envie a informação do formulário');
        } }
      >
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="Estado: "
          name="uf"
          options={ UF_LIST }
        />
        <Button
          type="submit"
          label="Próximo"
          moreClasses="is-fullwidth is-info"
        />
      </form>
    );
  }
}

// mapStateToProps tá desativado pq esse componente não precisa ler nada do state
// const mapStateToProps = () => ({});

PersonalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

// qd o mapStateToProps ñ é utilizado, escreva null no lugar dele para que o componente possa ainda assim receber a função dispatch
export default connect(null)(PersonalForm);
