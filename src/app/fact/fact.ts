export function fact(x : number) {
    let aux = 1;
    let factorial = 1;

    if (x > 16 || x < 0) {
        return 0;
    }

    else {
        while (aux <= x){
            factorial = factorial * aux;
            aux = aux + 1;
        }
        return factorial;
    }
}