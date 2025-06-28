// Abstract Factory Pattern Example
// This example demonstrates creating families of related UI components for different themes

// Abstract Product: Button
class Button {
    render() {
        throw new Error('This method must be overridden!');
    }
    
    onClick() {
        throw new Error('This method must be overridden!');
    }
}

// Abstract Product: Checkbox
class Checkbox {
    render() {
        throw new Error('This method must be overridden!');
    }
    
    toggle() {
        throw new Error('This method must be overridden!');
    }
}

// Abstract Product: TextField
class TextField {
    render() {
        throw new Error('This method must be overridden!');
    }
    
    focus() {
        throw new Error('This method must be overridden!');
    }
}

// Concrete Products: Windows Theme
class WindowsButton extends Button {
    render() {
        return 'Rendering a Windows-style button with flat design';
    }
    
    onClick() {
        return 'Windows button clicked with smooth animation';
    }
}

class WindowsCheckbox extends Checkbox {
    render() {
        return 'Rendering a Windows-style checkbox with square design';
    }
    
    toggle() {
        return 'Windows checkbox toggled with checkmark';
    }
}

class WindowsTextField extends TextField {
    render() {
        return 'Rendering a Windows-style text field with border';
    }
    
    focus() {
        return 'Windows text field focused with blue outline';
    }
}

// Concrete Products: Mac Theme
class MacButton extends Button {
    render() {
        return 'Rendering a Mac-style button with rounded corners';
    }
    
    onClick() {
        return 'Mac button clicked with bounce effect';
    }
}

class MacCheckbox extends Checkbox {
    render() {
        return 'Rendering a Mac-style checkbox with rounded design';
    }
    
    toggle() {
        return 'Mac checkbox toggled with smooth transition';
    }
}

class MacTextField extends TextField {
    render() {
        return 'Rendering a Mac-style text field with subtle shadow';
    }
    
    focus() {
        return 'Mac text field focused with glow effect';
    }
}

// Abstract Factory
class UIFactory {
    createButton() {
        throw new Error('This method must be overridden!');
    }
    
    createCheckbox() {
        throw new Error('This method must be overridden!');
    }
    
    createTextField() {
        throw new Error('This method must be overridden!');
    }
}

// Concrete Factory: Windows UI Factory
class WindowsUIFactory extends UIFactory {
    createButton() {
        return new WindowsButton();
    }
    
    createCheckbox() {
        return new WindowsCheckbox();
    }
    
    createTextField() {
        return new WindowsTextField();
    }
}

// Concrete Factory: Mac UI Factory
class MacUIFactory extends UIFactory {
    createButton() {
        return new MacButton();
    }
    
    createCheckbox() {
        return new MacCheckbox();
    }
    
    createTextField() {
        return new MacTextField();
    }
}

// Client code
function createUI(factory, theme) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    const textField = factory.createTextField();
    
    console.log(`\n🎨 Creating ${theme} UI Components:`);
    console.log('='.repeat(50));
    
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

// Usage
console.log('🚀 Abstract Factory Pattern Example');
console.log('Creating families of related UI components for different themes\n');

createUI(new WindowsUIFactory(), 'Windows');
createUI(new MacUIFactory(), 'Mac');

console.log('\n' + '='.repeat(60));
console.log('✅ Abstract Factory Pattern demonstrated successfully!');
console.log('\nKey Benefits:');
console.log('• Ensures all UI components follow the same theme');
console.log('• Easy to switch between different themes');
console.log('• Encapsulates theme-specific creation logic');
console.log('• Maintains consistency across related objects'); 