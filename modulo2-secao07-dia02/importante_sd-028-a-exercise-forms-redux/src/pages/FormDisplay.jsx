import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDisplay extends Component {
  render() {
    // todas essas propriiedades vieram do mapStateToProps que leu o estado global e trnasformou os estados em propriedades desse componente
    const {
      name,
      email,
      cpf,
      address,
      city,
      uf,
      resume,
      role,
      description,
    } = this.props;

    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { resume }
        </div>
        <div>
          Cargo:
          { role }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </section>
    );
  }
}

// dentro do mapStateToProps, poderia receber item por item, mas preferi espalhar as duas cheves de reducers que existem no estado global, exemplo:
// name: state.personalData.name
const mapStateToProps = (state) => ({
  ...state.personalData,
  ...state.professionalData,
});

FormDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDisplay);
