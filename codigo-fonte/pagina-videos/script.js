let segundos = 0;
        let minutos = 0;
        let horas = 24;

        function atualizarCronometro() {
            segundos--;
            if (segundos < 0) {
                segundos = 59;
                minutos--;
                if (minutos < 0) {
                    minutos = 59;
                    horas--;
                    if (horas < 0) {
                        horas = 24;
                    }
                }
            }
            const tempo = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            document.getElementById('cronometro').textContent = tempo;
        }

        setInterval(atualizarCronometro, 1000);
