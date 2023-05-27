import { MoviesData } from "./MoviesDatabase"

export async function fetchAll() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return MoviesData;
}

export function fetchOrderedRelease() {
    return MoviesData.sort(function compare(a, b) {
        if(a.release > b.release) {
            return 1;
        }
        else return -1;
    });
}