const ADD_ONE = 'listings/ADD_ONE';

const addOne = (listing) => {
    return {
        type: ADD_ONE,
        listing
    }
}

export const createListing = (listing) => async (dispatch) => {
    const response = await fetch('/api/listings/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });
    if (response.ok) {
        const newListing = await response.json();
        console.log(newListing);
        dispatch(addOne(newListing))
        return newListing
    }
}

const initialState = {}

const listingReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ONE: {
            const newState = {...state};
            newState[action.listing.id] = action.listing;
            return newState; 
        }
        default:
            return state;
    }
}

export default listingReducer;
