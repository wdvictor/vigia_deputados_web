import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { primaryBlue } from "../../../camara-theme";
const DeputadosSkeleton = () => (
  <Card backgroundColor={primaryBlue}>
    <Skeleton height="200px"></Skeleton>
    <CardBody>
      <SkeletonText />
    </CardBody>
  </Card>
);

export default DeputadosSkeleton;
