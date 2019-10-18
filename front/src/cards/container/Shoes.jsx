import React from 'react'
import { connect } from 'react-redux'
import Cards from '../components/Cards'

const Shoes = ({ shoesCatalog }) => {
    return <Cards data={shoesCatalog} />

}

const mapStateToProps = (state) => {
    return {
        shoesCatalog: state.styleProducts.shoes
    }
}

export default connect(mapStateToProps)(Shoes)