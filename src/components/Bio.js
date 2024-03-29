import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Written by <strong>{config.userName}</strong> who lives and works in Switzerland. Co founder of <a href="https://www.apptiva.ch/">Apptiva AG</a>.
      Father of an adorable girl.

      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    </p>
  </>
)

export default Bio;