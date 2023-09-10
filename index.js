document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.innerHTML;

        switch (buttonText) {
          case '=':
            try {
              string = eval(string);
              if (isNaN(string) || !isFinite(string)) {
                input.value = 'Error';
              } else {
                input.value = string;
              }
            } catch (error) {
              input.value = 'Error';
            }
            break;

          case 'c':
            string = '';
            input.value = string;
            break;

          case 'DEL':
            string = string.slice(0, -1);
            input.value = string;
            break;

          default:
            string += buttonText;
            input.value = string;
            break;
        }
      });
    });
  });

