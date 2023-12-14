function createCookie(name, value, days)
{
    let expiers = "";
    if(days)
    {
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expiers = "; expires="+date.toUTCString();
    }

    document.cookie = name+"="+value+expiers+"; path=/";
}

function readCookie(name)
{
    let nameData = name + "=";
    let ca = document.cookie.split(";");
    for(let i = 0; i < ca.length; i++)
    {
        let c = ca[i];
        while(c.charAt(0)==" ") c = c.substring(1, c.length);
        if(c.indexOf(nameData) == 0)
        {
            return c.substring(nameData.length, c.length);
        }
    }
    return null;
}

function remove(name)
{
    createCookie(name,"",-1);
}

createCookie("userName", "abcd", 8);

document.write(readCookie("userName"));

