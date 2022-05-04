import { producto } from "./productos"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 1000)
    })
}
