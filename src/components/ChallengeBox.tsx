import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from "react";

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, challengeCompleted } = useContext(ChallengesContext);


  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}alt="Body" />
            <strong>Exercite-se</strong>
            <p>
              {activeChallenge.description}
            </p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton} onClick={challengeCompleted}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <>
          <div className={styles.challengeNotActive}>
            <strong>
              Inicie um ciclo <br></br> parareceber desafios a<br></br> serem
              completados
            </strong>
            <div className={styles.challengeDescription}>
              <img src="icons/level-up.svg" alt="Level up" />
              <p>Complete-os e ganhe experiência e avance de leve.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
