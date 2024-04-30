function fatorial(n)
{
    let fat = 1
    for(c = n; c > 1; c--)
    {
        fat *= c
    }
    return console.log(fat)
}

fatorial(5)