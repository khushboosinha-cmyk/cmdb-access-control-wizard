import { LightningElement } from 'lwc';

export default class ShadowTest extends LightningElement {
    connectedCallback() {
        // Check if synthetic shadow is being used
        const hasShadowRoot = this.shadowRoot !== null;
        const shadowType = hasShadowRoot ? 'Native Shadow DOM' : 'Synthetic Shadow DOM';

        console.log('===== Shadow DOM Test =====');
        console.log(`Shadow Type: ${shadowType}`);
        console.log(`Has shadowRoot: ${hasShadowRoot}`);
        console.log(`Component Element:`, this);

        // Test if global styles penetrate
        setTimeout(() => {
            const cardElement = this.template.querySelector('.slds-card');
            const badgeElement = this.template.querySelector('.slds-badge');

            if (cardElement) {
                const cardStyles = window.getComputedStyle(cardElement);
                console.log('SLDS Card styles:');
                console.log('  - Background:', cardStyles.backgroundColor);
                console.log('  - Border:', cardStyles.border);
                console.log('  - Position:', cardStyles.position);
            }

            if (badgeElement) {
                const badgeStyles = window.getComputedStyle(badgeElement);
                console.log('SLDS Badge styles:');
                console.log('  - Display:', badgeStyles.display);
                console.log('  - Padding:', badgeStyles.padding);
                console.log('  - Background:', badgeStyles.backgroundColor);
                console.log('  - Border radius:', badgeStyles.borderRadius);
            }

            // Check if any SLDS classes are having effect
            const sldsElements = this.template.querySelectorAll('[class*="slds-"]');
            console.log(`Found ${sldsElements.length} elements with SLDS classes`);

            // Check synthetic shadow behavior
            const canQueryFromOutside = document.querySelectorAll('demo-shadow-test .slds-card').length > 0;
            console.log('Can query inside component from outside:', canQueryFromOutside);
            console.log('✅ Synthetic Shadow is:', canQueryFromOutside ? 'WORKING' : 'NOT WORKING');
        }, 500); // Increased timeout for styles to fully load
    }
}