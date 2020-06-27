import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import Routes from './components/routes';
import { PersistGate } from 'redux-persist/integration/react';

const RenderView = () => {
    return <React.Fragment>
        <Provider store={store}>
            <PersistGate loading={null}
                persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    </React.Fragment>
}

ReactDOM.render(<RenderView />, document.getElementById('root'));
