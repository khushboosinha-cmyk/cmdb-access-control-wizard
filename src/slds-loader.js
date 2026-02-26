// Load SLDS CSS dynamically to bypass Vite processing
// This allows it to work with synthetic shadow DOM

export function loadSLDS() {
    // Only load if not already present
    if (!document.querySelector('link[href*="salesforce-lightning-design-system"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/slds/styles/salesforce-lightning-design-system.min.css';
        document.head.appendChild(link);
        console.log('SLDS CSS loaded dynamically');
    }

    // Add slds-scope class to body if not present
    if (!document.body.classList.contains('slds-scope')) {
        document.body.classList.add('slds-scope');
        console.log('Added slds-scope class to body');
    }
}