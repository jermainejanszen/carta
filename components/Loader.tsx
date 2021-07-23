import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import PageContainer from './PageContainer';

interface Props {}

const Loader = (props: Props) => {
  return (
    <PageContainer>
      <Flex direction="column" justifyContent="center" height="100vh">
        <Spinner size="xl"/>
      </Flex>
    </PageContainer>
  );
};

export default Loader;
