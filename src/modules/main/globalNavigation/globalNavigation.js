import { LightningElement, api } from 'lwc';

export default class GlobalNavigation extends LightningElement {
    @api currentPage = 'home';

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isIconsPage() {
        return this.currentPage === 'icons';
    }

    get isSettingsPage() {
        return this.currentPage === 'settings';
    }

    get isUserPage() {
        return this.currentPage === 'user';
    }

    get homeTabClass() {
        return `slds-context-bar__item ${this.isHomePage ? 'slds-is-active' : ''}`;
    }

    get iconsTabClass() {
        return `slds-context-bar__item ${this.isIconsPage ? 'slds-is-active' : ''}`;
    }

    get settingsTabClass() {
        return `slds-context-bar__item ${this.isSettingsPage ? 'slds-is-active' : ''}`;
    }

    get userTabClass() {
        return `slds-context-bar__item ${this.isUserPage ? 'slds-is-active' : ''}`;
    }

    handleHomeClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }

    handleIconsClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'icons' },
            bubbles: true,
            composed: true
        }));
    }

    handleSettingsClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'settings' },
            bubbles: true,
            composed: true
        }));
    }

    handleUserClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'user' },
            bubbles: true,
            composed: true
        }));
    }

    handleMenuNavigate(event) {
        const page = event.detail.value;
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }
}
