const LOAD_RESERVATIONS = 'listings/LOAD_RESERVATIONS';
const ADD_RESERVATION = 'reservations/ADD_RESERVATION'
const LOAD_SINGLE = 'reservations/LOAD_SINGLE';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION';

const loadReservations = (reservations) => {
    return {
        type: LOAD_RESERVATIONS,
        reservations
    };
};

const addReservation = (reservation) => {
    return {
        type: ADD_RESERVATION,
        reservation
    };
};

const loadSingleReservation = (reservation) => {
    return {
        type: LOAD_SINGLE,
        reservation
    };
};

const removeReservation = (reservationId) => {
    return {
        type: DELETE_RESERVATION,
        reservationId
    };
};

export const deleteReservation = (reservationId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/delete/${reservationId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(removeReservation(reservationId));
        return res;
    };
};

export const createReservation = (reservation) => async (dispatch) => {
    const response = await fetch(`/api/reservations/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    });
    if (response.ok) {
        const reservation = await response.json();
        dispatch(addReservation(reservation));
        return reservation;
    };
};

export const getReservations = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/listing/${listingId}`);
    if (response.ok) {
        const reservations = await response.json();
        dispatch(loadReservations(reservations));
        return reservations;
    };
};

export const getUserReservations = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/user/${userId}`);
    if (response.ok) {
        const reservations = await response.json();
        dispatch(loadReservations(reservations));
        return reservations;
    };
}

export const getSingleReservation = (resrvationId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${resrvationId}`);
    if (response.ok) {
        const reservation = await response.json();
        dispatch(loadSingleReservation(reservation));
        return reservation;
    };
}

const initialState = {}

const reservationReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_RESERVATIONS: {
            const newState = {};
            action.reservations.forEach((reservation, i) => {
                newState[i] = reservation;
            });
            return newState;
        };
        case ADD_RESERVATION: {
            const newState = {...state};
            newState[action.reservation.id] = action.reservation;
            return newState;
        };
        case LOAD_SINGLE: {
            const newState = {};
            newState[action.reservation.id] = action.reservation;
            return newState;
        };
        case DELETE_RESERVATION: {
            const newState = {...state};
            delete newState[action.reservationId];
            return newState; 
        }
        default:
            return state;
    };
};

export default reservationReducer;
