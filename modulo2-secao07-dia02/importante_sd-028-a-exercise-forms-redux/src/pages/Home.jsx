import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';

class Home extends Component {
  render() {
    // dá para usar o history pq o Home está sendo roteado, então tem propriedades do React Router DOM
    const { history } = this.props;
    return (
      <section>
        <Button
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="button"
          onClick={ () => history.push('/personal-form') }
        />
      </section>
    );
  }
}

// mapStateToProps tá desativado pq esse componente não precisa ler nada do state
// const mapStateToProps = () => ({});

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null)(Home);
