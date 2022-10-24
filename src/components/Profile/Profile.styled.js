import styled from 'styled-components';

export const Profile = styled.div`
  margin: 50px auto;
  max-width: 250px;
  heigth: 315px;
`;
export const Description = styled.div`
  text-align: center;
  display: block;
`;
export const ProfileAvatar = styled.img`
  margin-top: 20px;
  width: 100px;
  border-radius: 50%;
`;
export const ProfileName = styled.p`
  margin: 10px;
  font-weigth: 700;
  font-size: 18px;
`;
export const ProfileTag = styled.p`
  margin: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.19;
  color: grey;
`;
export const ProfileLocation = styled.p`
  margin: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.19;
  color: grey;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 22px;
  padding: 20px 0;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
`;
export const ItemLabel = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  color: grey;
`;
export const ItemQuantity = styled.span`
  font-weigth: 500;
  font-size: 18px;
`;
