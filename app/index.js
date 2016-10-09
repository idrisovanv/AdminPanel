import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './styles/main.scss';

const accounts = {
    1: {id: 1, email: 'vasya@mail.ru', date: '18.02.2015', name: 'Вася', status: 1, tariff: 'Тариф1', expired: '18.02.2016', pages: 1},
    2: {id: 2, email: 'kolya@mail.ru', date: '3.10.2015', name: 'Коля', status: 2, tariff: 'Тариф2', expired: '3.10.2016', pages: 5},
    3: {id: 3, email: 'genya@mail.ru', date: '5.12.2016', name: 'Женя', status: 3, tariff: 'Тариф3', expired: '5.12.2017', pages: 15}
};

const store = configureStore({accounts: accounts});
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
