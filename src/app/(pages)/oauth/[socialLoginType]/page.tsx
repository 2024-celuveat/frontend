import { SocialLoginType } from '@/@types';

import OAuth from './_components/OAuth';

async function OAuthPage({
  searchParams,
  params,
}: {
  searchParams: {
    code: string;
  };
  params: {
    socialLoginType: SocialLoginType;
  };
}) {
  return <OAuth socialLoginType={params.socialLoginType} authCode={searchParams.code} />;
}

export default OAuthPage;
