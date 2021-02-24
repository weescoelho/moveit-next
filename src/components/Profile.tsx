import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/weescoelho.png" alt="Weslley Coelho"/>
      <div>
        <strong>Weslley Coelho</strong>
        <p>
        <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}