import moment from "moment/moment";



export const horaMes = (fecha) => {
    // console.log(fecha);
    const hoyMes = moment(fecha);

    return hoyMes.format('HH:mm a | MMMM Do');
}