const ADD_ONE = 'listings/ADD_ONE';
const LOAD_IMAGES = 'listings/LOAD_IMAGES';
const SELECT_ONE = 'listings/SELECT_ONE';
const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';
const UPDATE_ONE = 'listings/UPDATE_ONE';

const addOne = (listing) => {
    return {
        type: ADD_ONE,
        listing
    };
};

const selectOne = (listing) => {
    return {
        type: SELECT_ONE,
        listing
    };
};

const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    };
};

const loadListings = (listings) => {
    return {
        type: LOAD_LISTINGS,
        listings
    };
};

const updateOne = (listing) => {
    return {
        type: UPDATE_ONE,
        listing
    };
};

export const createImages = (images, listingId) => async (dispatch) => {
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
    };
};

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
    };
};

export const getListing = (id) => async (dispatch) => {
    const response = await fetch(`/api/listings/${id}`);
    if (response.ok) {
        const listing = await response.json();
        dispatch(selectOne(listing));
        return listing;
    };
};

export const getImages = (id) => async (dispatch) => {
    const response = await fetch(`/api/listings/images/${id}`);
    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images));
        return images;
    };
};

export const getUserListings = (userId) => async (dispatch) => {
    const response = await fetch(`/api/listings/user/${userId}`);
    if (response.ok) {
        const listings = await response.json();
        dispatch(loadListings(listings));
        return listings;
    };
};

export const updateListing = (listing, listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/update/${listingId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });
    if (response.ok) {
        const updatedListing = await response.json();
        dispatch(updateOne(updatedListing));
        return updatedListing;
    };
}

const initialState = {
    images: {},
    selected: {}
};

const listingReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ONE: {
            const newState = {...state, images: {...state.images}};
            newState[action.listing.id] = action.listing;
            return newState;
        };
        case LOAD_IMAGES: {
            const newState = {...state, images: {}, selected: {...state.selected}};
            action.images.forEach((image) => {
                const imgArr = image.url.split('=index?');
                image.url = imgArr[0]; 
                newState.images[imgArr[1]] = image
            });
            return newState;
        };
        case SELECT_ONE: {
            const newState = {...state, images: {...state.images}, selected: {[action.listing.id]: action.listing}};
            return newState;
        };
        case LOAD_LISTINGS: {
            const newState = {};
            action.listings.forEach((listing) => {
                newState[listing.id] = listing;
            });
            return newState;
        };
        case UPDATE_ONE: {
            const newState = {...state, images: {...state.images}, selected: {...state.selected}};
            newState[action.listing.id] = action.listing;
            return newState;
        };
        default:
            return state;
    };
};

export default listingReducer;
