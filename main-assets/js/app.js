// Generate random bright colors
        function generateRandomColor() {
            const hue = Math.floor(Math.random() * 360);
            return `hsl(${hue}, 70%, 50%)`;
        }
        
        // Make a color darker for gradient
        function darkenColor(hslColor) {
            const match = hslColor.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
            if (!match) return hslColor;
            
            const hue = match[1];
            const saturation = match[2];
            const lightness = Math.max(20, parseInt(match[3]) - 15);
            
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
        
        // Apply random colors to buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(button => {
            const color = generateRandomColor();
            const darkerColor = darkenColor(color);
            
            button.style.background = `linear-gradient(135deg, ${color} 0%, ${darkerColor} 100%)`;
            button.style.borderColor = color;
        });
        
        // Update button counter
        const buttonCount = navButtons.length;
        document.getElementById('buttonCount').textContent = buttonCount;