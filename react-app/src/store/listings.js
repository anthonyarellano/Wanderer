const ADD_ONE = 'listings/ADD_ONE';
const LOAD_IMAGES = 'listings/LOAD_IMAGES';

const addOne = (listing) => {
    return {
        type: ADD_ONE,
        listing
    }
}

// const loadImages = (images) => {
//     return {
//         type: LOAD_IMAGES,
//         images
//     }
// }

export const createImages = (images, listingId) => async (dispatch) => {
    console.log(images, "IN THUNK!");
    const response = await fetch(`/api/listings/create/images/${listingId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(images)
    });
    if (response.ok) {
        const newImages = await response.json();
        // dispatch(loadImages(newImages));
        return newImages;
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
            dispatch(addOne(newListing))
            return newListing
    }
}


const initialState = {
    images: {}
}

const listingReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ONE: {
            const newState = {...state, images: {...state.images}};
            newState[action.listing.id] = action.listing;
            return newState;
        };
        case LOAD_IMAGES: {
            const newState = {...state, images: {...state.images}};
            action.images.forEach((image) => {
                newState[image.id] = image
                // newState.listings[image.listing_id].images[image.id] = image
            });
            return newState;
        };
        default:
            return state;
    }
}

export default listingReducer;
