import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completeChallenge();
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }


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
            <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>
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
