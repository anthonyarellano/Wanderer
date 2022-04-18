const LOAD_RESERVATIONS = 'listings/LOAD_RESERVATIONS';

const loadReservations = (reservations) => {
    return {
        type: LOAD_RESERVATIONS,
        reservations
    }
}

export const getReservations = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${listingId}`);
    if (response.ok) {
        const reservations = await response.json();
        dispatch(loadReservations(reservations));
        return reservations;
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
        default:
            return state;
    };
};

export default reservationReducer;
