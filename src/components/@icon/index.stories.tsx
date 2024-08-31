import type { Meta } from '@storybook/react';
import IconThumbsUpFilled from './IconThumbsUpFilled';
import { colors } from '@/constants/colors';
import IconArrowLeft from './IconArrowLeft';
import IconArrowRight from './IconArrowRight';
import IconCheck from './IconCheck';
import IconClose from './IconClose';
import IconHeartFilled from './IconHeartFilled';
import IconHeartOutlined from './IconHeartOutlined';
import IconHomeOutlined from './IconHomeOutlined';
import IconHomeFilled from './IconHomeFilled';
import IconInfo from './IconInfo';
import IconLocation from './IconLocation';
import IconMapOutlined from './IconMapOutlined';
import IconMapFilled from './IconMapFilled';
import IconPersonOutlined from './IconPersonOutlined';
import IconPersonFilled from './IconPersonFilled';
import IconNotice from './IconNotice';
import IconPlus from './IconPlus';
import IconMore from './IconMore';
import IconReviewFilled from './IconReviewFilled';
import IconReviewOutlined from './IconReviewOutlined';
import IconSearch from './IconSearch';

const meta: Meta = {
  title: '@icon/index',
};

export default meta;

export const Default = {
  render: () => (
    <>
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
