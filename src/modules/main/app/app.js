import { LightningElement, track } from 'lwc';
import { subscribe, navigate } from '../../../router';
import { toggleSLDS, activeSLDSVersion } from '../../../slds-loader';
import Home from 'main/home';
import IconTest from 'main/iconTest';
import Settings from 'main/settings';
import User from 'main/user';

const ROUTE_COMPONENTS = {
    'main-home': Home,
    'main-icon-test': IconTest,
    'main-settings': Settings,
    'main-user': User,
};

export default class App extends LightningElement {
    @track route;
    @track _sldsVersion = 2;
    @track _darkMode = false;

    get sldsToggleLabel() {
        return this._sldsVersion === 2 ? 'Switch to SLDS 1' : 'Switch to SLDS 2';
    }

    get showDarkModeButton() {
        return this._sldsVersion === 2;
    }

    get darkModeLabel() {
        return this._darkMode ? 'Light Mode' : 'Dark Mode';
    }

    get componentCtor() {
        const name = this.route?.component;
        return name ? ROUTE_COMPONENTS[name] ?? null : null;
    }

    connectedCallback() {
        this._sldsVersion = activeSLDSVersion();
        this.unsubscribe = subscribe((route) => {
            this.route = route;
        });
    }

    disconnectedCallback() {
        this.unsubscribe?.();
    }

    handleToggleSLDS() {
        toggleSLDS();
        this._sldsVersion = activeSLDSVersion();
        if (this._sldsVersion !== 2 && this._darkMode) {
            this._darkMode = false;
            document.body.classList.remove('slds-color-scheme_dark');
        }
    }

    handleToggleDarkMode() {
        this._darkMode = !this._darkMode;
        document.body.classList.toggle('slds-color-scheme_dark', this._darkMode);
    }

    handleNavigateHome() {
        navigate('/');
    }
    handleNavigateIcons() {
        navigate('/icons');
    }
    handleNavigateSettings() {
        navigate('/settings');
    }
    handleNavigateUser() {
        navigate('/users/42');
    }

    handleNavigateBack() {
        history.back();
    }
}
