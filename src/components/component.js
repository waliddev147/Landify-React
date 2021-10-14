import React from 'react'

import PropTypes from 'prop-types'

import StoreBanner from './store-banner'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <header className={styles['Header']}>
      <div className={styles['Logo']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
      </div>
      <div className={styles['Menu']}>
        <span className={styles['text']}>{props.text}</span>
        <span className={styles['text1']}>{props.text1}</span>
        <span className={styles['text2']}>{props.text2}</span>
        <span className={styles['text3']}>{props.text3}</span>
        <span className={styles['text4']}>{props.text4}</span>
        <span className={styles['text5']}>{props.text5}</span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
      </div>
      <div className={styles['container']}>
        <StoreBanner></StoreBanner>
      </div>
      <svg viewBox="0 0 1024 1024" className={styles['Menu1']}>
        <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      </svg>
    </header>
  )
}

AppComponent.defaultProps = {
  image_src: '/playground_assets/logotype-dark.svg',
  text3: 'Blog',
  text1: 'Products',
  text: 'About',
  image_alt: 'image',
  text2: 'Pricing',
  text5: 'More',
  text4: 'Jobs',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
}

export default AppComponent
