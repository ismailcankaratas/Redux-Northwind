import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi.");
    }
    render() {
        return (
            <div>
                <h3>
                    <Badge color='warning'>
                        Sepet
                    </Badge>
                    &nbsp;
                    <Badge color='success'>
                        {this.props.cart.length}
                    </Badge>
                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>
                                        Sil
                                    </Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
