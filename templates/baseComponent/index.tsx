import styles from './styles.module.scss';

export interface IBaseTemplate {
  sampleTextProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
  return <div className={styles.container}>{sampleTextProps}</div>;
};

export default BaseTemplate;
