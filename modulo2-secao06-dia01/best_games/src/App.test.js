/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando Aplicação Game Card', () => {
  test('Se o carregando aparece na tela', () => {

    // acessar elemento na tela
    render(<App />);
    screen.logTestingPlaygroundURL();
    const loadingElem = screen.getByText(/carregando/i);

    // testar
    expect(loadingElem).toBeInTheDocument();
  
  });

  test('Se p jogo Minecraft é renderizado após a saía do carregando', async () => {

    // acessar elemento na tela
    render(<App />);

    // considerar a remoção do carregando antes de testar a renderização do game
    const loadingElem = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loadingElem, {timeout: 3500});
    
    const gameTitle = screen.getByText('Minecraft');

    // testar
    expect(gameTitle).toBeInTheDocument();

  });

  test('Após carregamento da lista de jogos, se ao clicar em detalhes do segundo jogo da lista, renderiza Release Year e Sales', async () => {
    
    // acessar elemento na tela
    render(<App />);

    // considerar a remoção do carregando da tela inicial antes de testar a renderização do game
    const loadingElem = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loadingElem, {timeout: 3500});

    const allButtons = screen.getAllByRole('link', { name: 'Ver detalhes' });

    // interagir
    userEvent.click(allButtons[0]);

    // testar

    const loadingElem2 = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loadingElem2, { timeout: 3500});

    const releaseText = screen.getByText('Release Year');
    const salesText = screen.getByText('Sales');
    expect(releaseText).toBeInTheDocument();
    expect(salesText).toBetInTheDocument();    
    });

})

