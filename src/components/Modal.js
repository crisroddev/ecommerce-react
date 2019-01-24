import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer} from './context';
import { ButtonContainer } from './styled-components/Button';
import { Link } from 'react-router-dom';
import { ModalContainer } from './styled-components/Modal';

export default class Modal extends Component {
    render() {
      return (
        <ProductConsumer>
          {value => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize p-5" id="modal">
                        <h5>item added to cart</h5>
                        <img src={img} className="img-fluid" alt="product"/>
                        <h5>{title}</h5>
                        <h5 className="text-muted">price : ${price}</h5>
                        <Link to='/'>
                            <ButtonContainer onClick={() =>closeModal()}>
                            Store
                            </ButtonContainer>
                        </Link>
                        <Link to='/cart'>
                            <ButtonContainer cart onClick={() =>closeModal()}>
                            Go To Cart
                            </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      );
    }
  }

