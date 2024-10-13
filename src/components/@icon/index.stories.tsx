import type { Meta } from '@storybook/react';

import { colors } from '@/constants/colors';

import IconAlarm from './IconAlarm';
import IconArrowLeft from './IconArrowLeft';
import IconArrowRight from './IconArrowRight';
import IconCheck from './IconCheck';
import IconClose from './IconClose';
import IconHeartFilled from './IconHeartFilled';
import IconHeartOutlined from './IconHeartOutlined';
import IconHere from './IconHere';
import IconHomeFilled from './IconHomeFilled';
import IconHomeOutlined from './IconHomeOutlined';
import IconInfo from './IconInfo';
import IconLocation from './IconLocation';
import IconMapFilled from './IconMapFilled';
import IconMapOutlined from './IconMapOutlined';
import IconMore from './IconMore';
import IconNotice from './IconNotice';
import IconPersonFilled from './IconPersonFilled';
import IconPersonOutlined from './IconPersonOutlined';
import IconPlus from './IconPlus';
import IconReviewFilled from './IconReviewFilled';
import IconReviewOutlined from './IconReviewOutlined';
import IconSearch from './IconSearch';
import IconThumbsUpFilled from './IconThumbsUpFilled';

const meta: Meta = {
  title: '@icon/index',
};

export default meta;

export const Default = {
  render: () => (
    <>
      <div>
        <IconAlarm />
        IconAlarm
      </div>
      <div>
        <IconThumbsUpFilled fill={colors.main[700]} />
        IconThumbsUpFilled
      </div>
      <div>
        <IconArrowLeft />
        IconArrowLeft
      </div>
      <div>
        <IconArrowRight />
        IconArrowRight
      </div>
      <div>
        <IconCheck />
        IconCheck
      </div>
      <div>
        <IconClose />
        IconClose
      </div>
      <div>
        <IconHere />
        IconHere
      </div>
      <div>
        <IconHeartFilled />
        IconHeartFilled
      </div>
      <div>
        <IconHeartOutlined />
        IconHeartOutlined
      </div>
      <div>
        <IconHomeFilled />
        IconHomeFilled
      </div>
      <div>
        <IconHomeOutlined />
        IconHomeOutlined
      </div>
      <div>
        <IconInfo />
        IconInfo
      </div>
      <div>
        <IconLocation />
        IconLocation
      </div>
      <div>
        <IconMapFilled />
        IconMapFilled
      </div>
      <div>
        <IconMapOutlined />
        IconMapOutlined
      </div>
      <div>
        <IconPersonFilled />
        IconPersonFilled
      </div>
      <div>
        <IconPersonOutlined />
        IconPersonOutlined
      </div>
      <div>
        <IconPlus />
        IconPlus
      </div>
      <div>
        <IconNotice />
        IconNotice
      </div>
      <div>
        <IconMore />
        IconMore
      </div>
      <div>
        <IconReviewFilled />
        IconReviewFilled
      </div>
      <div>
        <IconReviewOutlined />
        IconReviewOutlined
      </div>
      <div>
        <IconSearch />
        IconSearch
      </div>
    </>
  ),
};
