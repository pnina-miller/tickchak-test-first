import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { fetchRequest } from "../../store/ticket/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Ticket } from "../../store/ticket/types";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;


interface PropsFromState {
  loading: boolean;
  data: Ticket[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Container>
      {/* <Navbar /> */}
      <div className="ticket-list-container">
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ tickets }: ApplicationState) => ({
  loading: tickets.loading,
  errors: tickets.errors,
  data: tickets.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
