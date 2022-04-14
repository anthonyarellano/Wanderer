








export const createListing = (listing) => async (dispatch) => {
    const response = await fetch('/api/listings/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });
    if (response.ok) {
        const listing = await response.json();
        // dispatch
        return listing
    }
}

const initialState = {}

const listingReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default listingReducer;
