import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { submitProfessionallInfo } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      resume: '',
      role: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { resume, role, description } = this.state;

    // dá para usar o history pq está sendo roteado, então tem propriedades do React Router DOM. Além disso, sem o connect (conectar o componente ao redux), o componente não tem dispatch
    const { history, dispatch } = this.props;

    return (
      <form
        onSubmit={ (e) => {
          // se ñ tiver e.preventDefault o formulario ai ter o comportamento padrão de recarregar a pág. e enviar as info. automaticamente p/ o parâmetro
          e.preventDefault();

          // o dispatch está aqui disparando a ação submitProfessionallInfo pq qd o botão próximo é clicado, a função onSubmit é executada por ele ser do tipo submit. O this.state é passado como parâmetro da função dispatch pq todas as info. se encontram no estado do próprio componente c/ os estados atualizados)
          dispatch(submitProfessionallInfo(this.state));

          // esse history vai levar para a rota form-display qd apertar o botão pq o botão é do tipo submit.
          history.push('/form-display');

          console.log('Ao clicar, envie a informação do formulário');
        } }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ resume }
          name="resume"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="role"
          type="text"
          value={ role }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
        />
      </form>
    );
  }
}

// mapStateToProps tá desativado pq esse componente não precisa ler nada do state
// const mapStateToProps = () => ({});

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

// qd o mapStateToProps ñ é utilizado, escreva null no lugar dele para que o componente possa ainda assim receber a função dispatch
export default connect(null)(ProfessionalForm);
