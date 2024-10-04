import type { Meta } from '@storybook/react';

import { colors } from '@/constants/colors';

import IconAlarm from './IconAlarm';
import IconArrowLeft from './IconArrowLeft';
import IconArrowRight from './IconArrowRight';
import IconCheck from './IconCheck';
import IconClose from './IconClose';
import IconHeartFilled from './IconHeartFilled';
import IconHeartOutlined from './IconHeartOutlined';
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
      <IconAlarm />
      <IconThumbsUpFilled fill={colors.main[700]} />
      <IconArrowLeft />
      <IconArrowRight />
      <IconCheck />
      <IconClose />
      <IconHeartFilled />
      <IconHeartOutlined />
      <IconHomeFilled />
      <IconHomeOutlined />
      <IconInfo />
      <IconLocation />
      <IconMapFilled />
      <IconMapOutlined />
      <IconPersonFilled />
      <IconPersonOutlined />
      <IconPlus />
      <IconNotice />
      <IconMore />
      <IconReviewFilled />
      <IconReviewOutlined />
      <IconSearch />
    </>
  ),
};
