document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;
            if (this.id === 'reset') {
                currentInput = '';
                display.value = '';
            } else if (this.id === 'del') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (this.id === 'equals') {
                if (currentInput === '') display.value = 'Cannot evaluate empty string';
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch {
                    display.value = 'Error';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});