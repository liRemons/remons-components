import type { LayoutProps } from 'antd';
import Section, { SectionProps as SectionTypes } from './components/Section';
import { Layout } from 'antd';

interface MyLayoutProps {
  Section: typeof Section;
}

type MyLayoutTypes = MyLayoutProps & LayoutProps;

export const MyLayoutType = (props: MyLayoutProps) => {};
export const SectionProps = (props: SectionTypes) => {};

const MyLayout: MyLayoutTypes = {
  Section,
};

MyLayout.Section = Section;

Object.assign(MyLayout, Layout);

export default MyLayout;
