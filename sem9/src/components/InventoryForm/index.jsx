import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class InventoryFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <input
          type="text"
          placeholder="Nombre"
          ref={ node => { this.nameInput = node; } }
        />
        <input
          type="number"
          placeholder="Precio"
          ref={ node => { this.priceInput = node; } }
        />
        <input
          type="number"
          placeholder="Cantidad"
          ref={ node => { this.qtyInput = node; } }
        />
        <button
          onClick={
            () => {
              onSubmit(
                this.nameInput.value,
                this.priceInput.value,
                this.qtyInput.value,
              );

              this.nameInput.value = "";
              this.priceInput.value = "";
              this.qtyInput.value = "";
              this.nameInput.focus();
            }
          }
        >
          Agregar!
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name, price, qty) {
      dispatch(actions.addToInventory(uuid(), name, price, qty));
    }
  })
)(InventoryFormDummy);
