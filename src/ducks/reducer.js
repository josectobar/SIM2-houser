const initialState = {
    name: ``,
    address: ``,
    city: ``,
    uState: ``,
    zip_code: ``,
    mortgage_amount:``,
    desire_rent: ``,
    img_url:``
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE'
const UPDATE_IMG_URL = 'UPDATE_IMG_URL'
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE'
const CANCEL_WIZARD = 'CANCEL_WIZARD'

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_STEP_ONE:
        
        const { name, address, city, uState, zip_code } = action.payload
        return {...state, name, address, city, uState, zip_code}

        case UPDATE_IMG_URL:;
        return {...state, img_url: action.payload}

        case UPDATE_STEP_THREE:
        const { mortgage_amount, desire_rent } = action.payload
        return {...state, mortgage_amount, desire_rent }

        case CANCEL_WIZARD:
        return action.payload

        default:
        return state
    }
}

export function updateStepOne(stepOneState) {
    return {
        type: UPDATE_STEP_ONE,
        payload: stepOneState
    }
}

export function updateStepThree(stepThreeState) {
    return {
        type: UPDATE_STEP_THREE,
        payload: stepThreeState
    }
}

export function updateImgUrl(img_url) {
    return {
        type: UPDATE_IMG_URL,
        payload: img_url
    }
}

export function cancelWizard() {
    return {
        type: CANCEL_WIZARD,
        payload: initialState
    }
}
