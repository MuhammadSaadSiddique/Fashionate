import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use your clothes to save planet Earth.',
    Svg: require('@site/static/img/Shopping-Online-shopping.svg').default,
  },
  {
    title: 'Your small step can fight the alarming climate situation right now.',
    Svg: require('@site/static/img/climate.svg').default,
    
  },
  {
    title: 'Be a warrior with one press. ',
    Svg: require('@site/static/img/clickbait.svg').default,
   
  },
  {
    title: 'Let us help in saving money and climate. ',
    Svg: require('@site/static/img/shipping.svg').default,

  },
  {
    title: 'pay',
    Svg: require('@site/static/img/Finances-Saving-money.svg').default,

  },
];

function Feature({Svg, title}) {
  return (
     <div className="container">
        
      <div className="text--center">
           <Svg className={styles.featureSvg} role="img" />
         </div>
         <div className="text--center padding-horiz--md">
           <h3>{title}</h3>
           {/* <p>{description}</p> */}
       </div>
      </div>
    // <div className={clsx('row')}>
    //   <div className={clsx('col col--12')}>
    //     <div className="text--center">
    //       <Svg className={styles.featureSvg} role="img" />
    //     </div>
    //     <div className="text--center padding-horiz--md">
    //       <h3>{title}</h3>
    //       {/* <p>{description}</p> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
