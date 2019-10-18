import { dataShoes, dataTop, dataAccessory, dataBottoms, dataHairstyle } from '../../dataTempory/index.js'

const initialState = { styleProducts: { hairstyle: dataHairstyle, top: dataTop, bottoms: dataBottoms, shoes: dataShoes, accessory: dataAccessory } }

function products(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default products