
function LeapYear()
    {

   
        var year = 2000;

        if ((year % 4 == 0) && year % 100 !== 0)
        {
            document.write(year + " високосный год");
        }
        else if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0))
        {
            document.write(year + " високосный год");
        }
        else
        {
            document.write(year + " не високосный год");
        }
    }
LeapYear();
