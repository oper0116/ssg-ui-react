import { useRouter } from 'next/router';
import { VisuallyHidden } from '@chakra-ui/react';
import { SystemIcon } from '../../icons';
import DefaultFloatingButton from './DefaultFloatingButton';

// TODO: 이전 페이지가 인피니티 스크롤일 때 스크롤 위치 유지
const HistoryBack = () => {
  const router = useRouter();
  return (
    <DefaultFloatingButton onClick={() => router.back()}>
      <>
        <VisuallyHidden>이전 페이지</VisuallyHidden>
        <SystemIcon icon="arrow_left" width="20px" height="20px" />
      </>
    </DefaultFloatingButton>
  );
};

export default HistoryBack;
