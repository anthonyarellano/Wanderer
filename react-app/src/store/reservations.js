const LOAD_RESERVATIONS = 'listings/LOAD_RESERVATIONS';
const ADD_RESERVATION = 'reservations/ADD_RESERVATION'
const LOAD_SINGLE = 'reservations/LOAD_SINGLE';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION';
const LOAD_RESERVATIONS_EDIT = 'reservations/LOAD_RESERVATIONS_EDIT'

const loadReservationsForEdit = (reservations) => {
    return {
        type: LOAD_RESERVATIONS_EDIT,
        reservations
    };
};

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

export const editReservation = (reservation, id) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${id}`, {
        method: "PUT",
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

export const getReservationsForEdit = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/listing/${listingId}`);
    if (response.ok) {
        const reservations = await response.json();
        dispatch(loadReservationsForEdit(reservations));
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

const initialState = {
    notSelected: {},
    selected: {},
    reservations: {}
};

const reservationReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_RESERVATIONS: {
            const newState = {reservations: {}};
            action.reservations.forEach((reservation, i) => {
                newState.reservations[i] = reservation;
            });
            return newState;
        };
        case LOAD_RESERVATIONS_EDIT: {
            const newState = {...state};
            action.reservations.forEach((reservation, i) => {
                newState.notSelected[i] = reservation;
            });
            return newState
        };
        case ADD_RESERVATION: {
            const newState = {...state};
            newState.reservations[action.reservation.id] = action.reservation;
            return newState;
        };
        case LOAD_SINGLE: {
            const newState = {...state, notSelected: {...state.notSelected}, selected: {}, reservations: {...state.reservations}};
            newState.selected[action.reservation.id] = action.reservation;
            return newState;
        };
        case DELETE_RESERVATION: {
            const newState = {...state, reservations: {...state.reservations}};
            delete newState.reservations[action.reservationId];
            return newState;
        }
        default:
            return state;
    };
};

export default reservationReducer;
