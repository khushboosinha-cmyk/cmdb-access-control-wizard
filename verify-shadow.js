// Run this script in the browser console to verify synthetic shadow DOM

console.log('===== SHADOW DOM VERIFICATION =====');

// Test 1: Check if components have shadowRoot
const appElement = document.querySelector('demo-app');
const hasShadowRoot = appElement && appElement.shadowRoot !== null;

console.log('1. Shadow Root Test:');
console.log(`   - Has shadowRoot: ${hasShadowRoot}`);
console.log(`   - Result: ${hasShadowRoot ? '❌ Native Shadow (not platform-like)' : '✅ Synthetic Shadow (platform-like)'}`);

// Test 2: Check if we can query internal elements directly
const internalElements = appElement ? appElement.querySelectorAll('.slds-section') : [];
console.log('\n2. Direct Query Test:');
console.log(`   - Can query internal elements: ${internalElements.length > 0}`);
console.log(`   - Found ${internalElements.length} .slds-section elements`);
console.log(`   - Result: ${internalElements.length > 0 ? '✅ Synthetic Shadow allows direct queries' : '❌ Native Shadow blocks queries'}`);

// Test 3: Check if global styles penetrate
const testElement = appElement ? appElement.querySelector('.slds-container_x-large') : null;
if (testElement) {
    const styles = window.getComputedStyle(testElement);
    const hasSldsStyles = styles.maxWidth !== 'none';
    console.log('\n3. Global Styles Test:');
    console.log(`   - SLDS container styles applied: ${hasSldsStyles}`);
    console.log(`   - Max-width value: ${styles.maxWidth}`);
    console.log(`   - Result: ${hasSldsStyles ? '✅ Global styles penetrate' : '❌ Global styles blocked'}`);
}

// Test 4: Check if synthetic shadow polyfill is loaded
console.log('\n4. Synthetic Shadow Polyfill:');
console.log(`   - window.SyntheticShadowRoot exists: ${typeof window.SyntheticShadowRoot !== 'undefined'}`);

// Summary
console.log('\n===== SUMMARY =====');
if (!hasShadowRoot && internalElements.length > 0) {
    console.log('✅ SYNTHETIC SHADOW DOM IS ACTIVE');
    console.log('This matches Salesforce platform behavior!');
} else {
    console.log('❌ NATIVE SHADOW DOM IS ACTIVE');
    console.log('This differs from Salesforce platform behavior.');
}

console.log('\nTo switch between shadow modes:');
console.log('- Synthetic (platform-like): disableSyntheticShadowSupport: false');
console.log('- Native (standard web): disableSyntheticShadowSupport: true');