import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { primaryColor } from "../../../custom-theme";

const PartidosSkeleton = () => (
  <Card backgroundColor={primaryColor}>
    <Skeleton height="150px" width="200px"></Skeleton>
    <CardBody>
      <SkeletonText />
    </CardBody>
  </Card>
);

export default PartidosSkeleton;
