import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { primaryColor } from "../../../custom-theme";

const DeputadosSkeleton = () => (
  <Card backgroundColor={primaryColor}>
    <Skeleton height="200px"></Skeleton>
    <CardBody>
      <SkeletonText />
    </CardBody>
  </Card>
);

export default DeputadosSkeleton;
