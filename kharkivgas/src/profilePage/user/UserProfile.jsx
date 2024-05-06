import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserMainContent from "./components/UserMainContent";
import {
  useToPayQuery,
  useUserPlanQuery,
} from "../../features/userProfile/userProfileApiSlice";

const UserProfile = () => {
  const { isLoading } = useToPayQuery();
  const { isLoading: isLoadingPlan } = useUserPlanQuery();

  const content =
    isLoading || isLoadingPlan ? (
      <Container>
        <div className="spinner d-flex justify-content-center align-items-center">
          <h1>Loading &nbsp;</h1>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Container>
    ) : (
      <UserMainContent />
    );
  return content;
};

export default UserProfile;
