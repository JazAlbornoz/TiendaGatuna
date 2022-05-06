import { producto } from "./productos"

export const pedirDatos = () => {
    return new Promise( (res, rej) => {
        setTimeout(() => {
            res(producto)
        }, 1000)
    })
}
