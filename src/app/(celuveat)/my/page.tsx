import Link from 'next/link';

interface MenuProps {
  label: string;
  menus: {
    title: string;
    href: string;
  }[];
}

const Menu = ({ label, menus }: MenuProps) => {
  return (
    <section className="pb-9 pt-20">
      <div className="px-20 py-8 text-gray-400 body-14-md">{label}</div>
      {menus.map(({ title, href }) => (
        <Link href={href} key={title} className="flex h-[50px] items-center justify-between px-20">
          <span className="text-gray-900 body-16-md">{title}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 16.25L14.1667 10L7.5 3.75" stroke="#BEBEC0" stroke-width="1.25" stroke-linecap="square" />
          </svg>
        </Link>
      ))}
    </section>
  );
};

const MENUS1 = [
  { title: '알림 설정', href: '' },
  { title: '업데이트 소식', href: '' },
  { title: '제안하기', href: '' },
];

const MENUS2 = [
  { title: '앱 정보', href: '' },
  { title: '이용 약관', href: '' },
  { title: '개인정보 보호 방침', href: '' },
];

const MyPage = () => {
  return (
    <>
      <section className="flex flex-col gap-20">
        <div className="flex items-center justify-between p-20">
          <div className="flex items-center gap-12">
            <div className="h-[52px] w-[52px] rounded-full bg-gray-200"></div>
            <span className="title-20-md">셀럽잇</span>
          </div>
          <button className="h-36 flex-none rounded-[8px] bg-gray-100 px-12 body-13-rg">프로필 수정</button>
        </div>

        <div className="px-20">
          <div className="flex h-[70px] justify-evenly rounded-[8px] bg-[#FFB26C1A] px-20 py-14">
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-4">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6">
                    <path
                      d="M17.375 6.98437C17.375 11.9062 10.0773 15.8902 9.76648 16.0547C9.68457 16.0988 9.59301 16.1218 9.5 16.1218C9.40699 16.1218 9.31543 16.0988 9.23352 16.0547C8.92273 15.8902 1.625 11.9062 1.625 6.98437C1.6263 5.8286 2.08601 4.72053 2.90327 3.90327C3.72053 3.08601 4.8286 2.6263 5.98437 2.625C7.625 2.62315 8.70758 3.24937 9.5 4.30477C10.2924 3.24937 11.375 2.625 13.0156 2.625C14.1714 2.6263 15.2795 3.08601 16.0967 3.90327C16.914 4.72053 17.3737 5.8286 17.375 6.98437Z"
                      fill="#FF7B54"
                    />
                  </g>
                </svg>
                <h2 className="text-gray-800 body-14-rg">관심 리스트</h2>
              </div>
              <span className="text-main-700 title-16-sb">50</span>
            </div>
            <hr className="h-full w-1 rounded-[100px] bg-main-500 opacity-20"></hr>
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-4">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 1.875C3.08579 1.875 2.75 2.21079 2.75 2.625V14.625C2.75 15.0392 3.08579 15.375 3.5 15.375H8V13.8304C8 13.3331 8.19755 12.8562 8.54919 12.5046L13.819 7.25735C14.0841 6.99226 14.4088 6.82314 14.75 6.75V2.625C14.75 2.21079 14.0392 1.875 13.625 1.875H3.5ZM12.125 5.99996C12.125 6.08281 12.0578 6.14996 11.975 6.14996H5.525C5.44216 6.14996 5.375 6.08281 5.375 5.99996V5.17496C5.375 5.09212 5.44216 5.02496 5.525 5.02496H11.975C12.0578 5.02496 12.125 5.09212 12.125 5.17496V5.99996ZM9.725 9.14996C9.80784 9.14996 9.875 9.08281 9.875 8.99996V8.17496C9.875 8.09212 9.80784 8.02496 9.725 8.02496H5.525C5.44216 8.02496 5.375 8.09212 5.375 8.17496V8.99996C5.375 9.08281 5.44216 9.14996 5.525 9.14996H9.725ZM7.25 12C7.25 12.0828 7.18284 12.15 7.1 12.15H5.525C5.44216 12.15 5.375 12.0828 5.375 12V11.175C5.375 11.0921 5.44216 11.025 5.525 11.025H7.1C7.18284 11.025 7.25 11.0921 7.25 11.175V12Z"
                      fill="#FF7B54"
                    />
                    <path
                      d="M9.125 13.7406C9.125 13.5339 9.20711 13.3357 9.35327 13.1895L14.4396 8.10326C14.744 7.79891 15.2374 7.79891 15.5418 8.10327L17.1467 9.70827C17.4511 10.0126 17.4511 10.5061 17.1467 10.8105L12.0604 15.8967C11.9142 16.0429 11.716 16.125 11.5093 16.125H9.125V13.7406Z"
                      fill="#FF7B54"
                    />
                  </g>
                </svg>
                <h2 className="text-gray-800 body-14-rg">작성한 리뷰</h2>
              </div>
              <span className="text-main-700 title-16-sb">20</span>
            </div>
          </div>
        </div>
      </section>
      <Menu label="서비스 이용" menus={MENUS1} />
      <div className="px-20">
        <hr className="h-1 bg-gray-100" />
      </div>
      <Menu label="기타" menus={MENUS2} />
      <section className="px-20 py-16">
        <a
          href={'/oauth/logout'}
          className="flex h-[50px] w-full items-center justify-center rounded-[8px] bg-gray-100 text-gray-700 body-16-md"
        >
          로그아웃
        </a>
        <button className="h-[50px] w-full items-center justify-center text-gray-400 body-14-md">회원탈퇴</button>
      </section>
    </>
  );
};

export default MyPage;
