// Without Abstract Factory Pattern
// This example shows the problems that arise when not using Abstract Factory

// Windows UI Components
class WindowsButton {
    render() {
        return 'Rendering a Windows-style button with flat design';
    }
    
    onClick() {
        return 'Windows button clicked with smooth animation';
    }
}

class WindowsCheckbox {
    render() {
        return 'Rendering a Windows-style checkbox with square design';
    }
    
    toggle() {
        return 'Windows checkbox toggled with checkmark';
    }
}

class WindowsTextField {
    render() {
        return 'Rendering a Windows-style text field with border';
    }
    
    focus() {
        return 'Windows text field focused with blue outline';
    }
}

// Mac UI Components
class MacButton {
    render() {
        return 'Rendering a Mac-style button with rounded corners';
    }
    
    onClick() {
        return 'Mac button clicked with bounce effect';
    }
}

class MacCheckbox {
    render() {
        return 'Rendering a Mac-style checkbox with rounded design';
    }
    
    toggle() {
        return 'Mac checkbox toggled with smooth transition';
    }
}

class MacTextField {
    render() {
        return 'Rendering a Mac-style text field with subtle shadow';
    }
    
    focus() {
        return 'Mac text field focused with glow effect';
    }
}

// Client code - PROBLEMS WITHOUT ABSTRACT FACTORY:
function createUIWithoutAbstractFactory(theme) {
    console.log(`\n🎨 Creating ${theme} UI Components (WITHOUT Abstract Factory):`);
    console.log('='.repeat(60));
    
    if (theme === 'Windows') {
        // PROBLEM 1: Manual selection of components - prone to errors
        const button = new WindowsButton();
        const checkbox = new WindowsCheckbox();
        const textField = new WindowsTextField();
        
        console.log('\n📱 Button:');
        console.log(button.render());
        console.log(button.onClick());
        
        console.log('\n☑️  Checkbox:');
        console.log(checkbox.render());
        console.log(checkbox.toggle());
        
        console.log('\n📝 Text Field:');
        console.log(textField.render());
        console.log(textField.focus());
        
    } else if (theme === 'Mac') {
        // PROBLEM 2: Duplicate code structure
        const button = new MacButton();
        const checkbox = new MacCheckbox();
        const textField = new MacTextField();
        
        console.log('\n📱 Button:');
        console.log(button.render());
        console.log(button.onClick());
        
        console.log('\n☑️  Checkbox:');
        console.log(checkbox.render());
        console.log(checkbox.toggle());
        
        console.log('\n📝 Text Field:');
        console.log(textField.render());
        console.log(textField.focus());
    }
}

// PROBLEM 3: Easy to mix themes accidentally
function createMixedThemeUI() {
    console.log('\n⚠️  PROBLEM: Mixed Theme UI (Accidental Inconsistency):');
    console.log('='.repeat(60));
    
    // This could easily happen without Abstract Factory
    const button = new WindowsButton();      // Windows theme
    const checkbox = new MacCheckbox();      // Mac theme - INCONSISTENT!
    const textField = new WindowsTextField(); // Windows theme
    
    console.log('\n📱 Button (Windows):');
    console.log(button.render());
    
    console.log('\n☑️  Checkbox (Mac):');
    console.log(checkbox.render());
    
    console.log('\n📝 Text Field (Windows):');
    console.log(textField.render());
    
    console.log('\n❌ PROBLEM: Mixed themes create inconsistent UI!');
}

// Usage
console.log('🚫 WITHOUT Abstract Factory Pattern');
console.log('Problems with manual component creation\n');

createUIWithoutAbstractFactory('Windows');
createUIWithoutAbstractFactory('Mac');
createMixedThemeUI();

console.log('\n' + '='.repeat(60));
console.log('❌ Problems without Abstract Factory:');
console.log('• Manual component selection is error-prone');
console.log('• Easy to mix themes accidentally');
console.log('• Duplicate code for each theme');
console.log('• No guarantee of theme consistency');
console.log('• Hard to add new themes or components'); 