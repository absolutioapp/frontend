import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const Card = styled.View`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 250px;
  aspect-ratio: 3 / 4;

  /* iOS shadow */
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 12px;
  shadow-offset: 0px 0px;

  /* Android elevation */
  elevation: 4;
`;

const Picture = styled.Image`
  border-radius: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.95;
`;

const Mark = styled.View`
  position: absolute;
  border-radius: 100vw;
  font-family: "Plus Jacarta";
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: #ffffff;
  background: rgba(126, 217, 199, 1);
  font-weight: 700;
  padding: 8px;
  border-radius: 100px;
  aspect-ratio: 4 / 4;
`;

const Body = styled(LinearGradient).attrs({
  colors: ["#00000000", "#000000ff"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  padding: 16px;
`;

const TagRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const Tag = styled.View`
  background: #f1f5f9;
  border-radius: 12px;
  padding: 4px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const TagText = styled.Text`
  color: #374151;
  font-weight: 500;
  font-size: 15px;
`;

export { Card, Picture, Body, TagRow, Tag, TagText, Mark };
