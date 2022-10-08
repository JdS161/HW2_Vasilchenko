// Task_1:
// Создать  несколько геометрических фигур. 
// При выборе цвета и фигуры, должны произойти соответствующие изменения.
// Пример компановки на рис.
 
function task_1 (_col,_fig)
{
let color = document.getElementById (_fig.value);
_fig.value=="triangle"?color.style.borderBottomColor=_col.value: color.style.backgroundColor=_col.value;

}

// Task_2:
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести
// результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function task_2()
{ 
    do {
        let num1 = +prompt("Enter first numner: ");
        let num2 = +prompt("Enter second number: ");
        let operation = prompt("Choose operation: + , - , * , / ");

        switch (operation) {
            case "+":
                alert(num1 + num2);
                break;
            case "-":
                alert(num1 - num2);
                break;
            case "/":
                alert(num1 / num2);
                break;
            case "*":
                alert(num1 * num2);
                break;
            default:
                break;
        }
    }while (confirm("Repeat?"));
}

// Task_3:
// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных
// и нулей. При этом также посчитать, сколько четных и нечетных. Вывести ста-тистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function task_3()
{    
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let even = 0;
    let odd =0;    
    
    for (let i=1; i<=10; i++)
    {
        let num = prompt("Enter " + i + " number:");
        if (num > 0)
        {
            pos++;
        }
        if(num < 0)
        {
            neg++;
        }
        if (num ==0)
        {
            zero++;
        }
        if (num%2 ==0)
        {
            even++;
        }
        if(num%2!==0)
        {
            odd++;
        }
    };

    alert("Statistics:\n Positive: " + pos + ";\n Negative: " + neg + ";\n Zero: " + zero + ";\n Even: " + even + ";\n Odd: " + odd);

}

