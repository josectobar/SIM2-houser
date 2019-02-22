const initialState = {
    name: ``,
    address: ``,
    city: ``,
    state: ``,
    zip_code: ``,
    img_url:``,
    mortgage_amount:``,
    desire_rent: ``
}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP_CODE = 'UPDATE_ZIP_CODE'
const UPDATE_IMG_URL = 'UPDATE_IMG_URL'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'
const CANCEL_WIZARD = 'CANCEL_WIZARD'

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
        
        return {...state, name: action.payload}
        case UPDATE_ADDRESS:
        return {...state, address: action.payload}
        case UPDATE_CITY:
        return {...state, city: action.payload}
        case UPDATE_STATE:
        return {...state, state: action.payload}
        case UPDATE_ZIP_CODE:
        return {...state, zip_code: action.payload}
        case UPDATE_IMG_URL:
        return {...state, img_url: action.payload}
        case UPDATE_MORTGAGE:
        return {...state, mortgage_amount: action.payload}
        case UPDATE_RENT:
        return {...state, desire_rent: action.payload}
        case CANCEL_WIZARD:
        return action.payload
        default:
        return state
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(uState) {
    return {
        type: UPDATE_STATE,
        payload: uState
    }
}
export function updateZipCode(zip_code) {
    return {
        type: UPDATE_ZIP_CODE,
        payload: zip_code
    }
}
export function updateImgUrl(img_url) {
    return {
        type: UPDATE_IMG_URL,
        payload: img_url
    }
}
export function updateMortgage(mortgage_amount) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage_amount
    }
}
export function updateRent(desire_rent) {
    return {
        type: UPDATE_RENT,
        payload: desire_rent
    }
}
export function cancelWizard() {
    return {
        type: CANCEL_WIZARD,
        payload: initialState
    }
}
