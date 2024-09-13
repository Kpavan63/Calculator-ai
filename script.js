 function clearDisplay() {
            document.getElementById('display').value = '';
        }
        
        function deleteChar() {
            let display = document.getElementById('display').value;
            document.getElementById('display').value = display.slice(0, -1);
        }
        
        function appendChar(char) {
            document.getElementById('display').value += char;
        }
        
        function calculate() {
            try {
                let result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
        
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }
        
